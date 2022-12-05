import { type RefObject, useEffect, useState } from 'react';

export const useHorizontalScroll = (scrollContainerRef: RefObject<HTMLElement>) => {
  const [isWindowSizeSmallEnough, setIsWindowSizeSmallEnough] = useState(false);
  const [isScrollAtStart, setIsScrollAtStart] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setIsWindowSizeSmallEnough(true);
    } else {
      setIsWindowSizeSmallEnough(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 500) setIsWindowSizeSmallEnough(true);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollToStart = () => {
    if (scrollContainerRef.current) {
      setIsScrollAtStart(false);
      scrollContainerRef.current.scrollLeft += scrollContainerRef.current.scrollWidth;
    }
  };

  const handleScrollToEnd = () => {
    if (scrollContainerRef.current) {
      setIsScrollAtStart(true);
      scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.scrollWidth;
    }
  };

  return { isScrollAtStart, isWindowSizeSmallEnough, handleScrollToStart, handleScrollToEnd };
};
