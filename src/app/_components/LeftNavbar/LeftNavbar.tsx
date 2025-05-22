"use client";

import styles from "./LeftNavbar.module.scss";
import { ChartSummary } from "@/types/api";
import { CircularProgress } from "@mui/material";
import { ChartCheckPanel } from "../ChartCheckPanel";
import selectedChartsStore from "@/common/stores/selectedChartsStore";
import { observer } from "mobx-react-lite";

export const LeftNavbar = observer(() => {
  const chartSummary = selectedChartsStore.getSelectedCharts;

  if (chartSummary.length === 0) {
    return (
      <div className={styles.root}>
        <div className={styles.spinner}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {chartSummary.map((chart: ChartSummary, index) => (
        <ChartCheckPanel key={index} name={chart.name} uuid={chart.uuid} />
      ))}
    </div>
  );
});
