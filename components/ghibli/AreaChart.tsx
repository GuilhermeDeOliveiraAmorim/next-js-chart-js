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
import { myData } from "../../data/ghibli";

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

interface IGhibli {
  tipo: {} | undefined | unknown;
  labels: {} | undefined | unknown;
}

export function AreaChart(props: IGhibli) {
  const { tipo, labels } = props;

  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        label: "rt_score",
        data: tipo,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
