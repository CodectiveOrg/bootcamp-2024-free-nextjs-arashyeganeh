import { ReactElement } from "react";

import FilterComponent from "@/app/search/components/filter/filter.component";
import ListComponent from "@/app/search/components/list/list.component";

import FilterProvider from "@/app/search/providers/filters/filters.provider";

import styles from "./page.module.css";

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
        <ListComponent></ListComponent>
      </div>
    </FilterProvider>
  );
}
