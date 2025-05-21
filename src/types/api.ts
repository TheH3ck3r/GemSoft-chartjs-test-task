export type Point = {
  x: number;
  y: number;
};

export type ChartSummary = {
  uuid: string;
  name: string;
};

export type ChartData = {
  uuid: string;
  data: Array<Point>;
};

export type ChartDataRequest = {
  ids: Array<string>;
};
