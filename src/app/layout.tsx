import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

import "./globals.css";
import { ReactElement } from "react";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "نوبت‌دهی آنلاین دکتر",
  description: "رزور وقت دکتر به صورت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          سامانه جامع ویزیت وقت ملاقات با پزشکان در سراسر کشور
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
