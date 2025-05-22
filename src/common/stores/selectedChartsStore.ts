import { ChartSummary } from "@/types/api";
import { makeAutoObservable } from "mobx";

export class SelectedChartsStore {
  selectedCharts: ChartSummary[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedChartsData(data: ChartSummary[]) {
    this.selectedCharts = data;
  }

  get getSelectedCharts(): ChartSummary[] {
    return this.selectedCharts;
  }

  get getSelectedIds(): string[] {
    return this.selectedCharts.map((chart) => chart.uuid);
  }

  get getSelectedNames(): string[] {
    return this.selectedCharts.map((chart) => chart.name);
  }
}

const selectedChartsStore = new SelectedChartsStore();

export default selectedChartsStore;
