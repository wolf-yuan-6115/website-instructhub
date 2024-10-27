import type { Component } from "solid-js";

import styles from "@/src/page/auth/login/login.module.css";

import { changeLocal, Locale, useTranslate } from "@/src/utils/i18n";
import SelectLanguage from "@/src/components/selectLanguage/selectLanguage";

const LoginModal: Component = () => {

  const t = useTranslate();

  return (
<div>{t("auth.login.Title")}</div>
  );
};

export default LoginModal;
