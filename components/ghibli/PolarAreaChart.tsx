import React, { useState } from "react";
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

const ghibliScore: { title: string; score: string }[] = [];

myData.forEach((e) => {
  ghibliScore.push({ title: e.title, score: e.rt_score });
});

export function PolarAreaChart() {
  const [sortBy, setSortBy] = useState<string>("score");

  var arrSort: {
    title: string;
    score: string;
  }[] = [];

  if (sortBy === "score") {
    arrSort = ghibliScore.sort(function (a, b) {
      if (a.score > b.score) {
        return 1;
      }
      if (a.score < b.score) {
        return -1;
      }
      return 0;
    });
  }

  if (sortBy === "title") {
    arrSort = ghibliScore.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  }

  const data = {
    labels: arrSort.map((data) => data.title),
    datasets: [
      {
        label: "# of Votes",
        data: arrSort.map((data) => data.score),
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
          onClick={() => setSortBy("score")}
          className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
        >
          By Score
        </button>
        <button
          onClick={() => setSortBy("title")}
          className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
        >
          By Title
        </button>
      </div>
      <PolarArea data={data} />
    </div>
  );
}
