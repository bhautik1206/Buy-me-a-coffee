import { useCallback, useEffect, useState } from 'react';

import { mediaSizes } from '../constants/layout';

/**
 * Dynamic values according to media size. This hook will return values
 * mapped to their media query.
 *
 * @param {[string|number]} values - 
 * Values to return when media matches to `matchMediaSizes`
 * @param {string|number} defaultValue - 
 * Default value to return when no media matches
 * @return {string|number} - `defaultValue` or one of the `values`
 *
 * Example:
```
const color = useMedia(['red', 'blue', 'yellow', 'gold'], 'pink');

> color = 'red'    // when media is mobile
> color = 'blue'   // when media is tablet
> color = 'yellow' // when media is laptop
> color = 'gold'   // when media is desktop
```
 *
 */
const useMedia = (values, defaultValue) => {
  // Array containing a media query list for each query
  const mediaQueryLists = mediaSizes.map((mediaSize) => window.matchMedia(mediaSize));

  // Mapped values with last value repeated to match length of `matchMediaSizes`

  // Function that gets value based on matching media query
  const getValue = useCallback(() => {
    // Get index of first media query that matches
    const index = mediaQueryLists.map((mql) => mql.matches).lastIndexOf(true);
    const mappedValue = [...values, ...new Array(mediaSizes.length - values.length).fill(values.pop())];

    // Return related value or defaultValue if none
    return typeof mappedValue[index] !== 'undefined' ? mappedValue[index] : defaultValue;
  }, [defaultValue, mediaQueryLists, values]);

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has
      //       current values of hook args (as this hook callback is created
      //       once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
    },
    [getValue, setValue, mediaQueryLists] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
};

export default useMedia;
