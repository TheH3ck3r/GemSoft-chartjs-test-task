"use client";

import { ChartViewer } from "../ChartViewer";
import styles from "./Data.module.scss";
import { observer } from "mobx-react-lite";
import chartsDataStore from "@/common/stores/chartsDataStore";
import { CircularProgress } from "@mui/material";
import chartsStore from "@/common/stores/chartsStore";

export const Data = observer(() => {
  const charts = chartsDataStore.getChartsData;

  const getChartNameById = (uuid: string): string => {
    const chart = chartsStore.selectedCharts.find(
      (chart) => chart.uuid === uuid
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
