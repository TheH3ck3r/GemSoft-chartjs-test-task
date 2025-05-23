import { ChartSummary } from "@/types/api";
import styles from "./ChartCheckPanel.module.scss";
import { FC } from "react";
import { Checkbox } from "@mui/material";
import selectedChartsStore from "@/common/stores/selectedChartsStore";
import { observer } from "mobx-react-lite";

export const ChartCheckPanel: FC<ChartSummary> = observer(({ name, uuid }) => {
  const selected = selectedChartsStore.getSelectedChartsNames;

  const handleToggle = () => {
    selectedChartsStore.toggleChart({ name, uuid });
  };

  return (
    <div className={styles.root}>
      {name}
      <Checkbox checked={selected.includes(name)} onChange={handleToggle} />
    </div>
  );
});
