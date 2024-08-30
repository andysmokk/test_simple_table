import React, { Suspense } from "react";

import Header from "@/components/Header";
import MainTable from "@/components/MainTable";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoaderSpinner size={40} />}>
        <Header />
        <main>
          <MainTable />
        </main>
      </Suspense>
    </>
  );
}
