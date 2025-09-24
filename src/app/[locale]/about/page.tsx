import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function About() {
  const t = useTranslations("About");
  return (
    <div className={styles.container}>
      <p className={styles.text}>{t("text")}</p>
      <div className={styles.link}>
        <Link href={"/"}>{t("link")}</Link>
      </div>
    </div>
  );
}

export default About;
