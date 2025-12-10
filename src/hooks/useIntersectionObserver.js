import { useEffect, useRef } from 'react';

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = "0px 0px -20% 0px", // Trigger when element is 20% from bottom
  triggerOnce = true
} = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      // If reduced motion is preferred, show immediately without animation logic
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          if (triggerOnce) {
            observer.unobserve(node);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      // Cleanup
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};
