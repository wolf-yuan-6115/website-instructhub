import type { Component, JSX } from "solid-js";
import styles from "./layout.module.css";
import { useTranslate } from "@/src/utils/i18n";
import SelectLanguage from "@/src/components/selectLanguage/selectLanguage";
import ToggleTheme from "@/src/components/toggleTheme/ToggleTheme";

interface AuthPageLayoutProps {
  Button: JSX.Element;
  Modal: JSX.Element;
  Footer: JSX.Element;
}

const AuthPageLayout: Component<AuthPageLayoutProps> = (props) => {
  return (
    <div>
      <header class={styles.authHeader}>
        <img src="/src/assets/logo.png" alt="Logo" class="w-10 h-10" />
        <div class={styles.optionGroup}>
          <ToggleTheme />
          <SelectLanguage />
          {props.Button}
        </div>
      </header>
      <div class={styles.modalContainer}>
        <main class={styles.modal}>{props.Modal} </main>
      </div>
      <footer class={styles.footer}>{props.Footer}</footer>
      <div class={styles.spotlightPeach}></div>
      <div class={styles.spotlightGreen}></div>
    </div>
  );
};

export default AuthPageLayout;
