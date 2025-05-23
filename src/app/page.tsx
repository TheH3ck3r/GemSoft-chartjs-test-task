"use client";

import { LeftNavbar } from "./_components/LeftNavbar";
import { Data } from "./_components/Data";
import { useEffect } from "react";
import { getChartSummary, getChartData } from "@/common/fetchers";
import styles from "./page.module.scss";
import chartsStore from "@/common/stores/chartsStore";
import chartsDataStore from "@/common/stores/chartsDataStore";
import selectedChartsStore from "@/common/stores/selectedChartsStore";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const summary = await getChartSummary();
      chartsStore.setCharts(summary);
      selectedChartsStore.setSelectedCharts(summary);

      const ids = chartsStore.getChartsIds;

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
