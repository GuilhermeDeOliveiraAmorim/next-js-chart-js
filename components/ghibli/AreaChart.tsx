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
  labels: string[];
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
        borderColor: "rgb(150, 52, 132)",
        backgroundColor: "rgba(48, 102, 190, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
