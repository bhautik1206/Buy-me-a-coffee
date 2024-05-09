import { useReducer } from 'react';

/**
 * Returns a stateful query value, and a function to update it.
 *
 * @param {object} initialState - Initial State
 */
const useQueryState = (initialState) => {
  const [queryState, setQueryState] = useReducer((state, action) => ({ ...state, ...action }), {
    ...initialState,
  });

  return [queryState, setQueryState];
};

export default useQueryState;
