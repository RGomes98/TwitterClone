import { type RefObject, useState, useEffect, useCallback } from 'react';

type RefType = HTMLDivElement | HTMLInputElement | HTMLTextAreaElement;

export const useOutsideClick = (ref: RefObject<RefType>) => {
  const [isOutside, setIsOutside] = useState(true);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setTimeout(() => {
          setIsOutside(true);
        }, 100);
      } else {
        setIsOutside(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);

    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [ref, handleMouseDown]);

  return { isOutside };
};
