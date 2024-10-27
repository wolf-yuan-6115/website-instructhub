import type { Component, JSX } from "solid-js";
import styles from "./header.module.css";
import { useTranslate } from "@/src/utils/i18n";
import SelectLanguage from "@/src/components/selectLanguage/selectLanguage";
import ToggleTheme from "@/src/components/toggleTheme/ToggleTheme";

interface AuthPageLayoutProps {
  button: JSX.Element; // button for change to signup or login
  modal: JSX.Element;
  footer: JSX.Element; // footer message can link to signup or login
}

const AuthPageLayout: Component<AuthPageLayoutProps> = (props) => {
  const t = useTranslate();

  return (
    <div>
      <header class={styles.authHeader}>
        <img
          src="/src/assets/logo.png" // 替換為你的 logo 路徑
          alt="Logo"
          class="w-10 h-10" // 使用 Tailwind CSS 類設置寬高
        />
        <div class={styles.optionGroup}>
          {props.button} {/* 右上角的按鈕 */}
          <SelectLanguage />
          <ToggleTheme />
        </div>
      </header>
      <main>
        {props.modal} {/* 中間的 modal */}
      </main>
      <footer class={styles.footer}>
        {props.footer}
      </footer>
      <div class={styles.spotlightPeach}></div>
      <div class={styles.spotlightGreen}></div>
    </div>
  );
};

export default AuthPageLayout;
