import { AreaChart } from "../components/ghibli/AreaChart";
import { MultiaxisLineChart } from "../components/ghibli/MultiaxisLineChart";
import { PolarAreaChart } from "../components/ghibli/PolarAreaChart";
import { HiCog } from "react-icons/hi";
import VerticalBarChart from "../components/ghibli/VerticalBarChart";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="flex justify-between items-center p-4 bg-[#F6F8FC] text-center text-[#5f6368]">
        <span>Treinando Chart.Js com NextJs</span>
        <div className="p-4 rounded-full hover:bg-[#e1e5ea] cursor-pointer">
          <HiCog />
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
          <Link href={"/ghibli"}>
            <div className="border hover:shadow-xl cursor-pointer border-spacing-2 bg-cover-login flex justify-center items-center rounded-3xl h-40  bg-no-repeat bg-center bg-cover">
              <div className="flex justify-center items-center rounded-3xl h-40 w-full bg-opacity-50 bg-black">
                <span className="text-white text-2xl">Ghibli</span>
              </div>
            </div>
          </Link>
          <Link href={"/rick-and-morty"}>
            <div className="border hover:shadow-xl cursor-pointer border-spacing-2 bg-bg-rick-and-morty flex justify-center items-center rounded-3xl h-40  bg-no-repeat bg-center bg-cover">
              <div className="flex justify-center items-center rounded-3xl h-40 w-full bg-opacity-50 bg-black">
                <span className="text-white text-2xl">Rick And Morty</span>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <footer className="p-4 bg-gray-900 text-center text-white">
        Treinando Chart.Js com NextJs
      </footer>
    </div>
  );
}
