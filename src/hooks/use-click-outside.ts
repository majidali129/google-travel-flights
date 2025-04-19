import { useEffect, useRef } from "react";

export const useClickOutside = (handler: () => void, listenCapturing: boolean = true) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: Event) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler?.();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
};
