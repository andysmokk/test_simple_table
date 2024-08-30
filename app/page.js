import Image from "next/image";
import Header from "../components/Header";
import MainTable from "../components/MainTable";

export default function Home() {
  return (
    <main className="dark:bg-basicBg-dark">
      <Header />
      <MainTable />
      {/* <ModeToggle /> */}
    </main>
  );
}
