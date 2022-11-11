import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900">
      <Link
        href={"/"}
        className="bg-slate-300 p-2 rounded-lg hover:bg-slate-200"
      >
        Home
      </Link>
      <div className="flex gap-2">
        <Link
          href={"ghibli"}
          className="bg-slate-300 p-2 rounded-lg hover:bg-slate-200"
        >
          Studio Ghibli
        </Link>
        <Link
          href={"rick-and-morty"}
          className="bg-slate-300 p-2 rounded-lg hover:bg-slate-200"
        >
          Rick And Morty
        </Link>
        <Link
          href={"coin-cap"}
          className="bg-slate-300 p-2 rounded-lg hover:bg-slate-200"
        >
          Coin Cap
        </Link>
      </div>
    </nav>
  );
}
