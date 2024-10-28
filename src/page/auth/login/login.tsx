import type { Component } from "solid-js";
import { For } from "solid-js";
import styles from "../auth.module.css";
import { useTranslate } from "@/src/utils/i18n";
import AuthPageLayout from "@/src/page/auth/layout";

interface LoginButton {
  message: "auth.google" | "auth.github" | "auth.gitlab";
  style: string;
  icon: string;
}

const LoginButtonData: LoginButton[] = [
  {
    message: "auth.google",
    style: styles.loginGoogle,
    icon: "google.svg",
  },
  {
    message: "auth.github",
    style: styles.loginGithub,
    icon: "github.svg",
  },
  {
    message: "auth.gitlab",
    style: styles.loginGitlab,
    icon: "gitlab.svg",
  },
];

const LoginModal: Component = () => {
  const t = useTranslate();

  return (
    <div class={styles.loginModal}>
      <div class={`${styles.title} ${styles["title"]}`}>
        {t("auth.login.title")}
      </div>

      {/* Use For to render all third-part login methods*/}
      <For each={LoginButtonData}>
        {(button) => (
          <button class={`${styles.button} ${button.style}`}>
            <img
              src={`/src/assets/svg/${button.icon}`}
              alt={`${button.message} icon`}
              class={styles.icon}
            />
            {t(button.message)}
          </button>
        )}
      </For>

      {/* Line */}
      <div class={styles.lineWrapper}>
        <div class={styles.line} />
        <div class={styles.linetext}>or</div>
        <div class={styles.line} />
      </div>
      {/* Email login */}
    </div>
  );
};

const LoginPage: Component = () => {
  const t = useTranslate();
  return (
    <div>
      <AuthPageLayout
        Footer={
          <a
            href="/signup"
            class={styles.footerLink}
          >
            {t("auth.dontHaveAmAccount")}<p class={styles.footerMessageHighlight}>{t("auth.signup.signup")}</p>
          </a>
        }
        Button={
          <button class={styles.unborderbutton}>{t("auth.signup.signup")}</button>
        }
        Modal={<LoginModal />}
      />
    </div>
  );
};

export default LoginPage;
