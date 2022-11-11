import { HiCog } from "react-icons/hi";
import Link from "next/link";
import { Footer } from "../components/util/footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="flex justify-between items-center p-4 bg-[#F6F8FC] text-center text-[#5f6368]">
        <span>Practicing ChartJs with NextJs</span>
        <div className="p-4 rounded-full hover:bg-[#e1e5ea] cursor-pointer">
          <HiCog />
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
          <Link href={"/ghibli"}>
            <div className="border hover:shadow-xl cursor-pointer border-spacing-2 bg-studio-ghibli flex justify-center items-center rounded-3xl h-40  bg-no-repeat bg-center bg-cover">
              <div className="flex justify-center items-center rounded-3xl h-40 w-full bg-opacity-50 bg-black">
                <span className="text-white text-2xl">Ghibli</span>
              </div>
            </div>
          </Link>
          <Link href={"/rick-and-morty"}>
            <div className="border hover:shadow-xl cursor-pointer border-spacing-2 bg-rick-and-morty flex justify-center items-center rounded-3xl h-40  bg-no-repeat bg-center bg-cover">
              <div className="flex justify-center items-center rounded-3xl h-40 w-full bg-opacity-50 bg-black">
                <span className="text-white text-2xl">Rick And Morty</span>
              </div>
            </div>
          </Link>
          <Link href={"/coin-cap"}>
            <div className="border hover:shadow-xl cursor-pointer border-spacing-2 bg-coin-cap flex justify-center items-center rounded-3xl h-40  bg-no-repeat bg-center bg-cover">
              <div className="flex justify-center items-center rounded-3xl h-40 w-full bg-opacity-50 bg-black">
                <span className="text-white text-2xl">Coin Cap</span>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
