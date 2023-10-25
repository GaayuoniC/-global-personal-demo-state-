import "../components/Header.css";
import { ThemeContext } from "../src/context/Context";
import { useContext } from "react";

export function Header() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <header>
      <button onClick={() => changeTheme({ color: "yellow" })}>Fancy</button>
      <button onClick={() => changeTheme({ color: "green" })}>Crazy</button>
      <button onClick={() => changeTheme({ color: "blue" })}>Classic</button>
    </header>
  );
}
