import type { Component } from "solid-js";

import styles from "./login.module.css";

import { changeLocal, Locale, useTranslate } from "@/src/utils/i18n";
import SelectLanguage from "@/src/components/selectLanguage/selectLanguage";
import ToggleTheme from "@/src/components/toggleTheme/ToggleTheme";

const LoginModal: Component = () => {

  const t = useTranslate();

  return (
    <div class={styles.loginBox}>
      <div class={`${styles.title} ${styles["title"]}`}>{t("auth.login.Title")}</div>
      <button class={`${styles.button} ${styles["loginGoogle"]}`}>{t("auth.login.Google")}</button>
      <button class={`${styles.button} ${styles["loginGitlab"]}`}>{t("auth.login.GitLab")}</button>
      <button class={`${styles.button} ${styles["loginGithub"]}`}>{t("auth.login.GitHub")}</button>
      <div class={styles.lineWrapper}>
  <div class={styles.line}><svg xmlns="http://www.w3.org/2000/svg" width="125" height="2" viewBox="0 0 125 2" fill="none"><path d="M0 1H125" stroke="var(--text)" /></svg></div>
  <div class={styles.linetext}>or</div>
  <div class={styles.line}><svg xmlns="http://www.w3.org/2000/svg" width="125" height="2" viewBox="0 0 125 2" fill="none"><path d="M0 1H125" stroke="var(--text)" /></svg></div>
</div>
    </div>
  );
};

export default LoginModal 