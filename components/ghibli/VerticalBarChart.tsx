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
import { myData } from "../../data/ghibli";

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
      text: "Vertical Bar Char: rt_score x release_date x running_time",
    },
  },
};

const labels = myData.map((data) => data.title);

export const data = {
  labels,
  datasets: [
    {
      label: "Score",
      data: myData.map((data) => data.rt_score),
      backgroundColor: "rgba(150, 52, 132, 0.5)",
    },
    {
      label: "Date",
      data: myData.map((data) => data.release_date),
      backgroundColor: "rgba(48, 102, 190, 0.5)",
    },
    {
      label: "Time",
      data: myData.map((data) => data.running_time),
      backgroundColor: "rgba(42, 245, 255, 0.5)",
    },
  ],
};

export default function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
