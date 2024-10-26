import type { Component } from "solid-js";

import styles from "@/src/App.module.css";
import "@/src/index.css";
import * as m from "@/src/paraglide/messages.js";
import { setLanguageTag } from "@/src/paraglide/runtime";
import ToggleTheme from "@/src/components/ToggleTheme";


const App: Component = () => {

  return (
    <div class={styles.container}>
      {m.greeting({name: "SolidJS"})}
      <ToggleTheme />
    </div>
  );
};

export default App;