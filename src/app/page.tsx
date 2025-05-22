"use client";

import { LeftNavbar } from "./_components/LeftNavbar";
import { Data } from "./_components/Data";
import { useEffect } from "react";
import { getChartSummary, getChartData } from "@/common/fetchers";
import styles from "./page.module.scss";
import selectedChartsStore from "@/common/stores/selectedChartsStore";
import chartDataStore from "@/common/stores/chartsDataStore";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const summary = await getChartSummary();
      selectedChartsStore.setSelectedChartsData(summary);

      const ids = selectedChartsStore.getSelectedIds;

      const data = await getChartData(ids);

      chartDataStore.setSChartsData(data);
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
