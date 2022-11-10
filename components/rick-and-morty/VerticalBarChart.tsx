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

function groupBy(array: any, key: any) {
  return array.reduce((acc: any, item: any) => {
    if (!acc[item[key]]) acc[item[key]] = [];
    acc[item[key]].push(item);
    return acc;
  }, {});
}

const characterFiltered = groupBy(rickAndMorty, "type");

const arrTypeCount = [];

for (const [key, value] of Object.entries(characterFiltered)) {
  arrTypeCount.push({ label: key, quantity: value.length });
}
const labels = arrTypeCount.map((data) => data.label);

export const data = {
  labels,
  datasets: [
    {
      label: "quantity x type",
      data: arrTypeCount.map((data) => data.quantity),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function VerticalBarChart() {
  return <Bar options={options} data={data} />;
}
