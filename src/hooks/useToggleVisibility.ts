import { useEffect, useState, useRef } from "react";

const useToggleVisibility = () => {
  const iconRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isVisible &&
        iconRef.current &&
        contentRef.current &&
        !iconRef.current.contains(e.target as Node) &&
        !contentRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible]);

  return { iconRef, contentRef, isVisible, toggleVisibility };
};

export default useToggleVisibility;
