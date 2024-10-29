import type { Component } from "solid-js";
import { For } from "solid-js";
import styles from "../auth.module.css";
import { useTranslate } from "@/src/utils/i18n";
import AuthPageLayout from "@/src/page/auth/layout";
import { Field } from "@ark-ui/solid/field";
import Lock from "lucide-solid/icons/lock";

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
    <div class={styles.container}>
      <div class={styles.modal}>
        <div class={styles.title}>{t("auth.login.title")}</div>

        <div class={styles.buttonContainer}>
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
        </div>

        <div class={styles.lineWrapper}>
          <div class={styles.divider} />
          <div class={styles.dividerText}>or</div>
          <div class={styles.divider} />
        </div>

        <div class={styles.inputWrapper}>
          <Field.Root>
            <Field.Input type="text" placeholder={t("auth.login.username")} />
          </Field.Root>

          <Field.Root>
            <div class={styles.inputWithIcon}>
              <Lock class={styles.inputWithIconIcon}/>
              <Field.Input class={styles.inputWithIconInput} type="text" placeholder={t("auth.login.password")} />
            </div>
          </Field.Root>
          <button class={styles.loginButton}>
            {t("auth.login.loginButton")}
          </button>
        </div>
      </div>

      <a class={styles.link}>{t("auth.login.forgotYourPassword")}</a>
    </div>
  );
};

const LoginPage: Component = () => {
  const t = useTranslate();
  return (
    <div>
      <AuthPageLayout
        Footer={
          <a href="/signup" class={styles.link}>
            {t("auth.login.dontHaveAnAccount")}
            <p class={styles.footerMessageHighlight}>
              {t("auth.signup.signup")}
            </p>
          </a>
        }
        Button={
          <a href="/signup">
            <button class={styles.unborderbutton}>
              {t("auth.signup.signup")}
            </button>
          </a>
        }
        Modal={<LoginModal />}
      />
    </div>
  );
};

export default LoginPage;
