import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState({
    name: "dark",
    color: "red",
    backgroundColor: "grey",
  });

  function changeTheme(newTheme) {
    setTheme({ ...theme, ...newTheme });
    console.log(theme.color); //console log shows that its functioning
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
