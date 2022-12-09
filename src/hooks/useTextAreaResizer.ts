import { type RefObject, useEffect, useCallback } from 'react';

type RefType = HTMLTextAreaElement;

export const useTextAreaResizer = (ref: RefObject<RefType>) => {
  const handleInput = useCallback(() => {
    if (ref?.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      if (ref.current.value === '') ref.current.style.height = 'unset';
    }
  }, [ref]);

  useEffect(() => {
    const textAreaRef = ref?.current;
    textAreaRef?.addEventListener('input', handleInput);
    return () => textAreaRef?.removeEventListener('input', handleInput);
  }, [ref, handleInput]);
};
