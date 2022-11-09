import { AreaChart } from "../../components/ghibli/AreaChart";
import { MultiaxisLineChart } from "../../components/ghibli/MultiaxisLineChart";
import { PolarAreaChart } from "../../components/ghibli/PolarAreaChart";
import { HiCog } from "react-icons/hi";
import VerticalBarChart from "../../components/ghibli/VerticalBarChart";
import { myData } from "../../data/ghibli";
import { useState } from "react";

export default function Glibi() {
  const [tipo, setTipo] = useState<{} | undefined | unknown>();

  function mudaGrafico(tipo: {} | undefined | unknown) {
    setTipo(tipo);
  }
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-[#F6F8FC] text-center text-[#5f6368]">
        <span>Chart.Js com Ghibli</span>
        <div className="p-4 rounded-full hover:bg-[#e1e5ea] cursor-pointer">
          <HiCog />
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
          <div className="border border-spacing-2">
            <VerticalBarChart />
          </div>
          <div className="border border-spacing-2">
            <div className="flex gap-2 p-2">
              <button
                onClick={() => mudaGrafico(myData.map((data) => data.rt_score))}
                className="bg-gray-200 p-2"
              >
                Rt Score
              </button>
              <button
                onClick={() =>
                  mudaGrafico(myData.map((data) => data.release_date))
                }
                className="bg-gray-200 p-2"
              >
                Release Date
              </button>
            </div>
            <AreaChart tipo={tipo} labels={myData.map((data) => data.title)} />
          </div>
          <div className="border border-spacing-2">
            <PolarAreaChart />
          </div>
          <div className="border border-spacing-2">
            <MultiaxisLineChart />
          </div>
        </div>
      </main>
      <footer className="p-4 bg-gray-900 text-center text-white">
        Treinando Chart.Js com NextJs
      </footer>
    </div>
  );
}
