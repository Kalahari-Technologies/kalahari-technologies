import { useEffect, useRef, useState } from "react";

function useVisibility(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible: inView };
}

export default useVisibility;
