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
import { coin_cap } from "../../data/coin_cap";

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
      text: "Vertical Bar Char: priceUsd x rank x volumeUsd24Hr",
    },
  },
};

const labels = coin_cap.map((data) => data.name);

export const data = {
  labels,
  datasets: [
    {
      label: "priceUsd",
      data: coin_cap.map((data) => data.priceUsd),
      backgroundColor: "rgba(150, 52, 132, 0.5)",
    },
    {
      label: "rank",
      data: coin_cap.map((data) => data.rank),
      backgroundColor: "rgba(48, 102, 190, 0.5)",
    },
    {
      label: "volumeUsd24Hr",
      data: coin_cap.map((data) => data.volumeUsd24Hr),
      backgroundColor: "rgba(42, 245, 255, 0.5)",
    },
  ],
};

export default function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
