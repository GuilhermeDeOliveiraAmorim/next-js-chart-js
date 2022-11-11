import { AreaChart } from "../../components/rick-and-morty/AreaChart";
import { MultiaxisLineChart } from "../../components/rick-and-morty/MultiaxisLineChart";
import { PolarAreaChart } from "../../components/rick-and-morty/PolarAreaChart";
import { Nav } from "../../components/util/nav";
import { Footer } from "../../components/util/footer";
import VerticalBarChart from "../../components/rick-and-morty/VerticalBarChart";

export default function RickAndMorty() {
  return (
    <div>
      <header className="flex justify-between items-center bg-rick-and-morty h-40 text-center text-[#5f6368] bg-no-repeat bg-center bg-cover">
        <div className="flex justify-center items-center p-4 h-40 w-full bg-opacity-60 bg-black">
          <span className="text-white text-3xl">Rick And Morty</span>
        </div>
      </header>
      <Nav />
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
      <Footer />
    </div>
  );
}
