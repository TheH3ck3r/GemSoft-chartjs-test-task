"use client";

import { ChartViewer } from "../ChartViewer";
import styles from "./Data.module.scss";
import { observer } from "mobx-react-lite";
import chartDataStore from "@/common/stores/chartsDataStore";
import { CircularProgress } from "@mui/material";
import selectedChartsStore from "@/common/stores/selectedChartsStore";

export const Data = observer(() => {
  const charts = chartDataStore.getChartsData;

  const getChartNameById = (uuid: string): string => {
    const chart = selectedChartsStore.selectedCharts.find(
      (c) => c.uuid === uuid
    );
    return chart ? chart.name : "Без имени";
  };

  if (charts.length === 0) {
    return (
      <div className={styles.spinner}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {charts.map((chart) => (
        <ChartViewer
          key={chart.uuid}
          chart={chart}
          name={getChartNameById(chart.uuid)}
        />
      ))}
    </div>
  );
});
