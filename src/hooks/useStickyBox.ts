import { useCallback, useEffect, useState } from 'react';

export const useStickyBox = () => {
  const [isScrollDownward, setIsScrollDownward] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = useCallback(() => {
    if (scrollYPosition > scrollY) {
      setIsScrollDownward(false);
    } else {
      setIsScrollDownward(true);
    }

    setScrollYPosition(scrollY);
  }, [scrollYPosition]);

  useEffect(() => {
    setScrollYPosition(scrollY);
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isScrollDownward, scrollYPosition };
};
