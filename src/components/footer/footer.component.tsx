import { ReactElement } from "react";

import Link from "next/link";
import Image from "next/image";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import idkLogo from "@/assets/logo/idk.svg";

import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>سلام دکتر</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          کشور
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="Certificate Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="Enamad Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="IDK Logo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="#" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی برای توسعه‌دهنده محفوظ است.
      </p>
    </footer>
  );
}
