import { ChartSummary } from "@/types/api";
import { makeAutoObservable } from "mobx";

export class SelectedChartsStore {
  selectedCharts: ChartSummary[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedCharts(data: ChartSummary[]) {
    this.selectedCharts = data;
  }

  get getSelectedCharts(): ChartSummary[] {
    return this.selectedCharts;
  }

  get getSelectedChartsIds(): string[] {
    return this.selectedCharts.map((chart) => chart.uuid);
  }

  get getSelectedChartsNames(): string[] {
    return this.selectedCharts.map((chart) => chart.name);
  }

  toggleChart(chart: ChartSummary) {
    const exists = this.selectedCharts.find((c) => c.uuid === chart.uuid);
    if (exists) {
      this.selectedCharts = this.selectedCharts.filter(
        (c) => c.uuid !== chart.uuid
      );
    } else {
      this.selectedCharts = [...this.selectedCharts, chart];
    }
  }
}

const selectedChartsStore = new SelectedChartsStore();

export default selectedChartsStore;
