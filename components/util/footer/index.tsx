import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-center text-white">
      <div className="flex gap-2">
        <span>Por</span>
        <Link
          href={"https://www.guilhermeamorim.com/"}
          className="hover:text-gray-400"
        >
          Guilherme Amorim
        </Link>
      </div>
    </footer>
  );
}
