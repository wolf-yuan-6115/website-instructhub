import { createResource, createSignal, type Component } from "solid-js";

import styles from "@/src/App.module.css";
import "@/src/index.css";
import "@/src/ark.css"
import ToggleTheme from "@/src/components/toggleTheme/ToggleTheme";


import { changeLocal, Locale, useTranslate } from "@/src/utils/i18n";
import SelectLanguage from "@/src/components/selectLanguage/selectLanguage";

const App: Component = () => {

  const t = useTranslate();

  return (
    <div class={styles.container}>
      <div>{t("global.hello", { name: "John" })}</div>
      <SelectLanguage />
      <ToggleTheme />
    </div>
  );
};

export default App;
