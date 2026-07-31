"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    if (isIntersecting) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(currentElement);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        try {
          observer.unobserve(currentElement);
        } catch (e) {
          // Ignore errors on cleanup if already unobserved
        }
      }
    };
  }, [options, isIntersecting]);

  return [elementRef, isIntersecting] as const;
}
