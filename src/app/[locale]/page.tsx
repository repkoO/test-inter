import Image from "next/image";
import styles from "./page.module.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <>
      <LanguageSwitcher />
      <div className={styles.page}>
        <h1>{t("title")}</h1>
      </div>
    </>
  );
}