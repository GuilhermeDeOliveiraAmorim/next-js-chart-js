import { AreaChart } from "../components/AreaChart";
import { MultiaxisLineChart } from "../components/MultiaxisLineChart";
import { PolarAreaChart } from "../components/PolarAreaChart";
import VerticalBarChart from "../components/VerticalBarChart";

export default function Home() {
  return (
    <div>
      <header className="p-4 bg-slate-500 text-center text-white">
        Treinando Chart.Js com NextJs
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
    </div>
  );
}
