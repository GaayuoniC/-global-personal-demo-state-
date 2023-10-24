import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [color, setColor] = useState({ color: "red" });

  function changeColor(newColor) {
    setColor(newColor);
    console.log(newColor); //console log shows that its functioning
  }

  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
