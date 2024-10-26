import type { Component } from "solid-js";

import styles from "./App.module.css";
import "./index.css";
import * as m from "./paraglide/messages.js";
import { setLanguageTag } from "./paraglide/runtime";
import ToggleTheme from "./components/ToggleTheme";


const App: Component = () => {

  return (
    <div class={styles.container}>
      <ToggleTheme />
    </div>
  );
};

export default App;