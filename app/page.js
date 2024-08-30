import React, { Suspense, lazy } from "react";

// import Header from "@/components/Header";
// import MainTable from "@/components/MainTable";
import LoaderSpinner from "@/components/LoaderSpinner";

const Header = lazy(() => import("@/components/Header"));
const MainTable = lazy(() => import("@/components/MainTable"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoaderSpinner size={20} />}>
        <Header />
      </Suspense>
      <Suspense fallback={<LoaderSpinner size={40} />}>
        <main>
          <MainTable />
        </main>
      </Suspense>
    </>
  );
}
