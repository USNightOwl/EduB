/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";
import { useState, useEffect } from "react";

interface Props {
  key: string;
  initialState: unknown;
}

export function useLocalStorage({ initialState, key }: Props) {
  const [value, setValue] = useState(function () {
    try {
      if (typeof window !== "undefined") {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(
    function () {
      try {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  useEffect(
    function () {
      try {
        if (typeof window !== "undefined") {
          const storedValue = window.localStorage.getItem(key);
          setValue(storedValue ? JSON.parse(storedValue) : initialState);
        }
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  return [value, setValue];
}
