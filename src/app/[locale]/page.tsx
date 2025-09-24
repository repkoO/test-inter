import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
