"use client";

import { ChartViewer } from "../ChartViewer";
import styles from "./Data.module.scss";
import { observer } from "mobx-react-lite";
import chartsDataStore from "@/common/stores/chartsDataStore";
import { CircularProgress } from "@mui/material";
import chartsStore from "@/common/stores/chartsStore";
import { ChartData } from "@/types/api";
import selectedChartsStore from "@/common/stores/selectedChartsStore";

export const Data = observer(() => {
  const charts = chartsDataStore.getChartsData;
  const selectedIds = selectedChartsStore.getSelectedChartsIds;

  const getChartNameById = (uuid: string): string => {
    const chart = chartsStore.getCharts.find((chart) => chart.uuid === uuid);
    return chart ? chart.name : "Без имени";
  };

  if (charts.length === 0) {
    return (
      <div className={styles.spinner}>
        <CircularProgress />
      </div>
    );
  }

  const filteredCharts = charts.filter((chart) =>
    selectedIds.includes(chart.uuid)
  );

  return (
    <div className={styles.root}>
      {filteredCharts.map((chart: ChartData) => (
        <ChartViewer
          key={chart.uuid}
          chart={chart}
          name={getChartNameById(chart.uuid)}
        />
      ))}
    </div>
  );
});
