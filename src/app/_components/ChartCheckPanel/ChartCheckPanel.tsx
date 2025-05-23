import { ChartSummary } from "@/types/api";
import styles from "./ChartCheckPanel.module.scss";
import { FC } from "react";
import { Checkbox } from "@mui/material";
import chartsStore from "@/common/stores/chartsStore";

export const ChartCheckPanel: FC<ChartSummary> = ({ name }) => {
  const selected = chartsStore.getSelectedNames;

  return (
    <div className={styles.root}>
      {name}
      <Checkbox checked={selected.includes(name)} />
    </div>
  );
};
