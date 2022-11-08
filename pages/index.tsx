import { AreaChart } from "../components/AreaChart";
import { MultiaxisLineChart } from "../components/MultiaxisLineChart";
import { PolarAreaChart } from "../components/PolarAreaChart";
import VerticalBarChart from "../components/VerticalBarChart";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div>
        <VerticalBarChart />
      </div>
      <div>
        <AreaChart />
      </div>
      <div>
        <PolarAreaChart />
      </div>
      <div>
        <MultiaxisLineChart />
      </div>
    </div>
  );
}
