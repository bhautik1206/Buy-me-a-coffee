import { useEffect } from 'react';

const useDocumentTitle = (title = '', trigger = null) => {
  const setNewTitle = (t) => {
    document.title = [t, 'Academy'].filter((part) => part.length > 0).join(' | ');
  };

  useEffect(() => {
    setNewTitle(title);
  }, [trigger, title]);
};

export default useDocumentTitle;
