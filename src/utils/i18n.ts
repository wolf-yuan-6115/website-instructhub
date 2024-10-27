import { createResource, createSignal, type Component } from "solid-js";

import * as i18n from "@solid-primitives/i18n";

import type * as en from "@/locales/en/en.ts";

export type Locale = "en" | "zh-tw";
export type RawDictionary = typeof en.dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  const dict: RawDictionary = (await import(`@/locales/${locale}/${locale}.ts`))
    .dict;
  return i18n.flatten(dict); // flatten the dictionary to make all nested keys available top-level
}

const [locale, setLocale] = createSignal<Locale>(localStorage.getItem("locale") as Locale);

// Save the locale to localStorage whenever it changes
setLocale((newLocale) => {
  localStorage.setItem("locale", newLocale); // Save to localStorage
  return newLocale;
});

const savedLocale = localStorage.getItem("locale") as Locale;
if (savedLocale) {
  setLocale(savedLocale);
} else {
  setLocale("en");
}

const [dict] = createResource(locale, fetchDictionary);

dict();

export function useTranslate() {
  const t = i18n.translator(dict, i18n.resolveTemplate);
  return t; // Return t and locale as an object
}

export function getLocale() {
    return locale; // Return t and locale as an object
  }

export function changeLocal(newLocale: Locale) {
  setLocale(newLocale); // Update the locale
  localStorage.setItem("locale", newLocale); // Save the new locale to localStorage
}
