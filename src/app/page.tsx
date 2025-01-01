import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import HelloDoctorLogo from "@/logo/hello-doctor-logo";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <HelloDoctorLogo />
        سلام دکتر
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
