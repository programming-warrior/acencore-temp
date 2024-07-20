import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const observer = useRef(null);
  const element = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    if (element.current) observer.current.observe(element.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [options]);

  return [element, entry];
};

export default useIntersectionObserver;