import Image from "next/image";
import Header from "../components/Header";
import MainTable from "../components/MainTable";

export default function Home() {
  return (
    <div className="dark:bg-basicBg-dark">
      <Header />
      <main>
        <MainTable />
      </main>
    </div>
  );
}
