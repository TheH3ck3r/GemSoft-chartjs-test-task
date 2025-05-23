"use client";

import { LeftNavbar } from "./_components/LeftNavbar";
import { Data } from "./_components/Data";
import { useEffect } from "react";
import { getChartSummary, getChartData } from "@/common/fetchers";
import styles from "./page.module.scss";
import chartsStore from "@/common/stores/chartsStore";
import chartsDataStore from "@/common/stores/chartsDataStore";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const summary = await getChartSummary();
      chartsStore.setSelectedChartsData(summary);

      const ids = chartsStore.getSelectedIds;

      const data = await getChartData(ids);

      chartsDataStore.setSChartsData(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.root}>
      <LeftNavbar />
      <Data />
    </div>
  );
}
