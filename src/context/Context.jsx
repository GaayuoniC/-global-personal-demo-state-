import { createContext, useState } from "react";

export const ThemeContext = createContext();

const themes = {
  crazy: {
    name: "fancy",
    backgroundColor: "red",
    color: "yellow",
    highlight: "green",
  },
  francy: {
    name: "fancy",
    backgroundColor: "red",
    color: "yellow",
    highlight: "green",
  },
  classic: {
    name: "fancy",
    backgroundColor: "red",
    color: "yellow",
    highlight: "green",
  },
};

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themes["classic"]);

  function changeTheme(newThemeName) {
    setTheme(themes[newThemeName]); //used this method but not sure of its functionality
    console.log(theme.color); //console log shows that its functioning
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
