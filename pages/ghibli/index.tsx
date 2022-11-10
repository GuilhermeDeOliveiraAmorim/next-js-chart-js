import { AreaChart } from "../../components/ghibli/AreaChart";
import { MultiaxisLineChart } from "../../components/ghibli/MultiaxisLineChart";
import { PolarAreaChart } from "../../components/ghibli/PolarAreaChart";
import { myData } from "../../data/ghibli";
import { useState } from "react";
import { Nav } from "../../components/util/nav";
import VerticalBarChart from "../../components/ghibli/VerticalBarChart";
import { Footer } from "../../components/util/footer";

export default function Glibi() {
  const [tipo, setTipo] = useState<{} | undefined | unknown>(
    myData.map((data) => data.rt_score)
  );

  function mudaGrafico(tipo: {} | undefined | unknown) {
    setTipo(tipo);
  }
  return (
    <div>
      <header className="flex justify-between items-center bg-studio-ghibli h-40 text-center text-[#5f6368] bg-no-repeat bg-center bg-cover">
        <div className="flex justify-center items-center p-4 h-40 w-full bg-opacity-60 bg-black">
          <span className="text-white text-3xl">Studio Ghibli</span>
        </div>
      </header>
      <Nav />
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
          <div className="border border-spacing-2 rounded-2xl">
            <VerticalBarChart />
          </div>
          <div className="border border-spacing-2 rounded-2xl">
            <div className="flex gap-2 p-2">
              <button
                onClick={() => mudaGrafico(myData.map((data) => data.rt_score))}
                className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
              >
                Rt Score
              </button>
              <button
                onClick={() =>
                  mudaGrafico(myData.map((data) => data.release_date))
                }
                className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
              >
                Release Date
              </button>
              <button
                onClick={() =>
                  mudaGrafico(myData.map((data) => data.running_time))
                }
                className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
              >
                Running Time
              </button>
            </div>
            <AreaChart tipo={tipo} labels={myData.map((data) => data.title)} />
          </div>
          <div className="border border-spacing-2 rounded-2xl">
            <PolarAreaChart />
          </div>
          <div className="border border-spacing-2 rounded-2xl">
            <MultiaxisLineChart />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
