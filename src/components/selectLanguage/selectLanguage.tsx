import { Component } from "solid-js";
import { Menu } from "@ark-ui/solid/menu";
import { changeLocal, getLocale, Locale } from "@/src/utils/i18n";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Languages from "lucide-solid/icons/languages";
import Check from "lucide-solid/icons/check"; // 確保你有引入勾號圖標

import styles from "./selectLanguage.module.css";

const localeData = [
  { value: "en", name: "English", flag: <span class="fi fi-us" /> },
  { value: "zh-tw", name: "繁體中文", flag: <span class="fi fi-tw" /> },
];

const SelectLanguage: Component = () => {
  const locale = getLocale();

  return (
    <Menu.Root
      onSelect={(details) => {
        const selectedLocale = details.value as Locale;
        changeLocal(selectedLocale);
      }}
    >
      <Menu.Trigger>
        <Languages class={styles.selectLanguageIcon} />
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content class={`${styles.menuContent}`}>
          {localeData.map((lang) => (
            <Menu.Item
              class={`${styles.menuItem} flex justify-between items-center`}
              value={lang.value}
            >
              <div class="flex items-center">
                {lang.flag}
                <span class="ml-2">{lang.name}</span>
              </div>
              {lang.value === locale() && (
                <Check color="var(--green)" class="ml-2" />
              )}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SelectLanguage;
