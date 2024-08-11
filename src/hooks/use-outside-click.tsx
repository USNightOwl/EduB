import { useEffect, useRef } from "react";
import { useKeyboard } from "./use-keyboard";

export function useOutsideClick(close: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [close]);

  useKeyboard({
    key: "Escape",
    onKeyPressed: () => close(),
  });

  return ref;
}
