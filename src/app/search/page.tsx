import { ReactElement } from "react";

import FilterComponent from "@/app/search/components/filter/filter.component";

import FilterProvider from "@/app/search/providers/filters/filters.provider";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function Page(): ReactElement {
  return (
    <FilterProvider>
      <div className={styles.page}>
        <div className={styles.filters}>
          <FilterComponent
            title="زوج یا فرد"
            options={[
              { key: "even", label: "زوج" },
              { key: "odd", label: "فرد" },
            ]}
          />
          <FilterComponent
            title="زوج یا فرد"
            options={[
              { key: "three", label: "بخش پذیر بر 3" },
              { key: "five", label: "بخش پذیر بر 5" },
              { key: "seven", label: "بخش پذیر بر 7" },
            ]}
          />
        </div>
        <div className={styles.results}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
      </div>
    </FilterProvider>
  );
}
