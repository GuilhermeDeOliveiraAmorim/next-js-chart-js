import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { rickAndMorty } from "../../data/rick_and_morty";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: "Studio Ghibli",
    },
  },
};

const labels = rickAndMorty.map((data) => data.name);

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "episodes numbers",
      data: rickAndMorty.map((data) => data.episode.length),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function AreaChart() {
  return <Line options={options} data={data} />;
}
