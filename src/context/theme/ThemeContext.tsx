import { ReactNode, createContext, useContext, useState } from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined | Error>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return new Error('Can not "useThemeContext" outside of the "ThemeProvider"')
  }

  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
