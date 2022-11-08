import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { myData } from "../data/ghibli";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Studio Ghibli rt_score running_time",
    },
  },
};

const labels = myData.map((data) => data.title);

export const data = {
  labels,
  datasets: [
    {
      label: "rt_score",
      data: myData.map((data) => data.rt_score),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "running_time",
      data: myData.map((data) => data.running_time),
      backgroundColor: "rgba(53, 162, 120, 0.5)",
    },
  ],
};

export default function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
