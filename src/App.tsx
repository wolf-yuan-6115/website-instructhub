import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import * as m from "./paraglide/messages.js";
import { setLanguageTag } from "./paraglide/runtime";

const App: Component = () => {
  setLanguageTag("en");
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{m.greeting({ name: "Yorukot" })}</p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
