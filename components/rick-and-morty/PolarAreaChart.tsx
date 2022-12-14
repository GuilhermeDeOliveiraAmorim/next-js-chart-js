import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { myData } from "../../data/ghibli";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: myData.map((data) => data.title),
  datasets: [
    {
      label: "# of Votes",
      data: myData.map((data) => data.rt_score),
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 123, 52, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PolarAreaChart() {
  return <PolarArea data={data} />;
}
