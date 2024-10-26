import type { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";

import styles from "./ToggleTheme.module.css";

import Moon from "lucide-solid/icons/moon";
import Sun from "lucide-solid/icons/sun";

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
      {isDark() ? <Moon /> : <Sun />}
    </div>
  );
};

export default ToggleTheme;
