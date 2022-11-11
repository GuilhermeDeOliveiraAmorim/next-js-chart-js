import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { coin_cap } from "../../data/coin_cap";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const coinCap: { cap: string; price: string; name: string }[] = [];

coin_cap.forEach((e) => {
  coinCap.push({ cap: e.marketCapUsd, price: e.priceUsd, name: e.name });
});

export function PolarAreaChart() {
  const [sortBy, setSortBy] = useState<string>("cap");

  var arrSort: {
    cap: string;
    price: string;
    name: string;
  }[] = [];

  if (sortBy === "cap") {
    arrSort = coinCap.sort(function (a, b) {
      if (a.cap > b.cap) {
        return 1;
      }
      if (a.cap < b.cap) {
        return -1;
      }
      return 0;
    });
  }

  if (sortBy === "price") {
    arrSort = coinCap.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
  }

  const data = {
    labels: arrSort.map((data) => data.name),
    datasets: [
      {
        label: "# of Votes",
        data: arrSort.map((data) => data.cap),
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
  return (
    <div>
      <div className="flex gap-2 p-2">
        <button
          onClick={() => setSortBy("cap")}
          className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
        >
          By Cap
        </button>
        <button
          onClick={() => setSortBy("price")}
          className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
        >
          By Price
        </button>
      </div>
      <PolarArea data={data} />
    </div>
  );
}
