"use client";
import { createContext, useState } from "react";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { ETheme } from "@/types/theme";

interface GlobalProps {
  cateOpenSlug: string;
  setCateOpenSlug: React.Dispatch<React.SetStateAction<string>>;
  theme: ETheme;
  setTheme: React.Dispatch<React.SetStateAction<ETheme>>;
}

const GlobalContext = createContext<GlobalProps | undefined>(undefined);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cateOpenSlug, setCateOpenSlug] = useState<string>("");
  const [theme, setTheme] = useLocalStorage({
    key: "theme",
    initialState: ETheme.LIGHT,
  });

  return (
    <GlobalContext.Provider
      value={{
        cateOpenSlug,
        setCateOpenSlug,
        theme,
        setTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
