import { AreaChart } from "../../components/rick-and-morty/AreaChart";
import { MultiaxisLineChart } from "../../components/ghibli/MultiaxisLineChart";
import { PolarAreaChart } from "../../components/rick-and-morty/PolarAreaChart";
import { HiCog } from "react-icons/hi";
import VerticalBarChart from "../../components/rick-and-morty/VerticalBarChart";

export default function RickAndMorty() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-[#F6F8FC] text-center text-[#5f6368]">
        <span>Chart.Js com Rick And Morty</span>
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
            <AreaChart />
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
