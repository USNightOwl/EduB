"use client";
import { createContext, useState } from "react";

interface GlobalProps {
  cateOpenSlug: string;
  setCateOpenSlug: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalProps | undefined>(undefined);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cateOpenSlug, setCateOpenSlug] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{
        cateOpenSlug,
        setCateOpenSlug,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
