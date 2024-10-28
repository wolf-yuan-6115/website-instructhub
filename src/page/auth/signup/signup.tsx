import type { Component } from "solid-js";
import { For } from "solid-js";
import styles from "../auth.module.css";
import { useTranslate } from "@/src/utils/i18n";
import AuthPageLayout from "@/src/page/auth/layout";
import Mail from "lucide-solid/icons/mail";

interface SignupButton {
  message: "auth.google" | "auth.github" | "auth.gitlab";
  style: string;
  icon: string;
}

const SignupButtonData: SignupButton[] = [
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

const SignupModal: Component = () => {
  const t = useTranslate();

  return (
    <div class={styles.modal}>
      <div class={styles.title}>{t("auth.signup.title")}</div>

      {/* Use For to render all third-part login methods*/}
      <For each={SignupButtonData}>
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
      <div class={styles.fullWidthDivider} />
      {/* Email Signup */}
      <button class={`${styles.button} ${styles.loginEmail}`}>
        <Mail />
        {t("auth.email")}
      </button>
    </div>
  );
};

const SignupPage: Component = () => {
  const t = useTranslate();
  return (
    <div>
      <AuthPageLayout
        Footer={
          <a href="/login" class={styles.link}>
            {t("auth.signup.alreadyHaveAnAccount")}
            <p class={styles.footerMessageHighlight}>{t("auth.login.login")}</p>
          </a>
        }
        Button={
          <a href="/login">
          <button class={styles.unborderbutton}>
            {t("auth.login.login")}
          </button>
          </a>
        }
        Modal={<SignupModal />}
      />
    </div>
  );
};

export default SignupPage;
