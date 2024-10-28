import type { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";

import styles from "./ToggleTheme.module.css";

import Moon from "lucide-solid/icons/moon";
import Sun from "lucide-solid/icons/sun";

const ToggleTheme: Component = () => {
  const [theme, setTheme] = createSignal(localStorage.getItem("theme") || "dark");

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
    }
    setTimeout(() => {
      document.documentElement.setAttribute("data-loaded", "true");
    }, 500);
  });

  const toggleTheme = () => {
    const newTheme = theme() === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  return (
    <div class={styles.toggleThemeIcon} onClick={toggleTheme}>
      {theme() === "dark" ? <Moon /> : <Sun />}
    </div>
  );
};

export default ToggleTheme;
