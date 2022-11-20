import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const isClient = typeof window === "object";

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  };

  const getIsMobile = () => (isClient ? window.innerWidth < 576 : undefined);

  const [windowSize, setWindowSize] = useState(getSize);
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(
    () => {
      if (!isClient) {
        return;
      }

      const handleResize = () => {
        setWindowSize(getSize());
        setIsMobile(getIsMobile());
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { windowSize, isMobile };
};
