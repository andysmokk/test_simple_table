import React, { Suspense } from "react";

import Header from "@/components/Header";
import MainTable from "@/components/MainTable";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Header />
        <main>
          <MainTable />
        </main>
      </Suspense>
    </>
  );
}
