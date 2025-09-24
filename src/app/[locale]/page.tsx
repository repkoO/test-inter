import Image from "next/image";
import styles from "./page.module.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <main className={styles.main}>
      <LanguageSwitcher />
      <div className={styles.page}>
        <h1>{t("title")}</h1>
      </div>
      <div className={styles.description}>
        <p className={styles.text}>{t("description")}</p>
      </div>
      <div className={styles.link}>
        <Link href={"/about"}>{t("link")}</Link>
      </div>
    </main>
  );
}
