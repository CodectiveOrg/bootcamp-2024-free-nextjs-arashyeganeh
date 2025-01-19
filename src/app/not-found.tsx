import Image from "next/image";
import styles from "./not-found.module.css";
import NotFoundtSVG from "@/assets/illustrations/404.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.container}>
        <div className={styles.writings}>
          <Image
            src={NotFoundtSVG}
            alt=""
            width="300"
            className={styles.image}
          />
          <div className={styles["status-code"]}>404</div>

          <h1>صفحه‌ی مورد نظر پیدا نشد!</h1>

          <p>
            می‌توانید به <Link href="/">صفحه‌ی اصلی</Link> بروید یا از جستجوی
            سایت استفاده کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
