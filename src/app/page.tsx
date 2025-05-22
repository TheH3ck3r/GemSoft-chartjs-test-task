"use client";

import { LeftNavbar } from "./_components/LeftNavbar";
import { Data } from "./_components/Data";
import { useEffect, useState } from "react";
import { ChartSummary } from "@/types/api";
import { getChartSummary } from "@/common/fetchers";
import { CircularProgress } from "@mui/material";
import styles from "./page.module.scss";

export default function Home() {
  const [chartSummary, setChartSummary] = useState<ChartSummary[]>([]);

  useEffect(() => {
    getChartSummary().then(setChartSummary);
  }, []);

  const ids = chartSummary.map((chart) => chart.uuid);

  return (
    <div className={styles.root}>
      <LeftNavbar chartSummary={chartSummary} />
      {chartSummary.length !== 0 ? (
        <Data chartsIds={ids} />
      ) : (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
