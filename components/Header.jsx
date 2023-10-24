import "../components/Header.css";
import { ThemeContext } from "../src/context/Context";
import { useContext } from "react";

export function Header() {
  const { changeColor } = useContext(ThemeContext);
  return (
    <header>
      <button onClick={() => changeColor({ color: "yellow" })}>Fancy</button>
      <button onClick={() => changeColor({ color: "green" })}>Crazy</button>
      <button onClick={() => changeColor({ color: "blue" })}>Classic</button>
    </header>
  );
}
