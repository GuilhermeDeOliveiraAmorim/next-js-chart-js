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
import { rickAndMorty } from "../../data/rick_and_morty";

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
      text: "Vertical Bar Chart: type",
    },
  },
};

const arrJustTypes: string[] = [];

rickAndMorty.forEach((element) => {
  arrJustTypes.push(element.type);
});

const arrTypes = arrJustTypes.filter(
  (key, i) => arrJustTypes.indexOf(key) === i
);

const typeCount: { type: string; count: number }[] = [];

arrTypes.forEach((e) => {
  var countType = 0;
  rickAndMorty.forEach((element) => {
    if (e === element.type) {
      countType++;
    }
  });
  typeCount.push({ type: e, count: countType });
});

const labels = typeCount.map((data) => data.type);

export const data = {
  labels,
  datasets: [
    {
      label: "quantity x type",
      data: typeCount.map((data) => data.count),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
