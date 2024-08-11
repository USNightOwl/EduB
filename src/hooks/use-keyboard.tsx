import { useEffect } from "react";

interface UseKeyboardArgs {
  isActive?: boolean;
  key: string;
  onKeyPressed: () => void;
}

export function useKeyboard({ isActive = true, key, onKeyPressed }: UseKeyboardArgs) {
  useEffect(() => {
    if (!isActive) return;

    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (e.key === key) {
        e.preventDefault();
        onKeyPressed();
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);
}
