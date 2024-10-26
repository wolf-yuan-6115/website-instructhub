import type { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";
import { Moon, Sun } from "lucide-solid";
import styles from "./ToggleTheme.module.css";

const ToggleTheme: Component = () => {
  const [isDark, setIsDark] = createSignal(true);

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    } else {
      setIsDark(false);
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
    }
  });

  const toggleTheme = () => {
    const newTheme = isDark() ? "light" : "dark";
    setIsDark(!isDark());
    localStorage.setItem("theme", newTheme);

    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  return (
    <div class={styles.toggleThemeIcon} onClick={toggleTheme}>
      {/* FIXME: somehow this casue really slow rendering In dev tools this image loading about 3000 times */}
      {isDark() ? <Moon /> : <Sun />}
    </div>
  );
};

export default ToggleTheme;