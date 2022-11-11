import { AreaChart } from "../../components/coin-cap/AreaChart";
import { MultiaxisLineChart } from "../../components/coin-cap/MultiaxisLineChart";
import { PolarAreaChart } from "../../components/coin-cap/PolarAreaChart";
import { coin_cap } from "../../data/coin_cap";
import { useState } from "react";
import { Nav } from "../../components/util/nav";
import { Footer } from "../../components/util/footer";
import VerticalBarChart from "../../components/coin-cap/VerticalBarChart";

export default function Glibi() {
  const [tipo, setTipo] = useState<{} | undefined | unknown>(
    coin_cap.map((data) => data.marketCapUsd)
  );

  function mudaGrafico(tipo: {} | undefined | unknown) {
    setTipo(tipo);
  }
  return (
    <div>
      <header className="flex justify-between items-center bg-coin-cap h-40 text-center text-[#5f6368] bg-no-repeat bg-center bg-cover">
        <div className="flex justify-center items-center p-4 h-40 w-full bg-opacity-60 bg-black">
          <span className="text-white text-3xl">Coin Cap</span>
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
                onClick={() =>
                  mudaGrafico(coin_cap.map((data) => data.marketCapUsd))
                }
                className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
              >
                Cap
              </button>
              <button
                onClick={() =>
                  mudaGrafico(coin_cap.map((data) => data.priceUsd))
                }
                className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
              >
                Price
              </button>
              <button
                onClick={() => mudaGrafico(coin_cap.map((data) => data.rank))}
                className="bg-gray-200 p-2 rounded-2xl hover:bg-slate-300"
              >
                Rank
              </button>
            </div>
            <AreaChart tipo={tipo} labels={coin_cap.map((data) => data.name)} />
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
