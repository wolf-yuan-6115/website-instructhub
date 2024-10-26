import { createResource, createSignal, type Component } from "solid-js";

import styles from "@/src/App.module.css";
import "@/src/index.css";
import ToggleTheme from "@/src/components/toggleTheme/ToggleTheme";

import * as i18n from "@solid-primitives/i18n";

import type * as en from "@/locales/en/en.ts";

export type Locale = "en" | "zh-tw";
export type RawDictionary = typeof en.dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  const dict: RawDictionary = (await import(`@/locales/${locale}/${locale}.ts`)).dict;
  return i18n.flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

const App: Component = () => {
  const [locale, setLocale] = createSignal<Locale>("en");
  setLocale("en")
  const [dict] = createResource(locale, fetchDictionary);
  
  dict();

  const t = i18n.translator(dict, i18n.resolveTemplate);

  return (
    <div class={styles.container}>
      <div>{t("global.hello", { name: "John" })}</div>
        <select value={locale()} onChange={(e) => setLocale(e.currentTarget.value as Locale)}>
          <option value="en">English</option>
          <option value="zh-tw">繁體中文</option>
        </select>
      <ToggleTheme />
    </div>
  );
};

export default App;