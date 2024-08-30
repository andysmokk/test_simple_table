import React, { Suspense } from "react";

import Header from "@/components/Header";
import MainTable from "@/components/MainTable";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoaderSpinner size={40} />}>
          <MainTable />
        </Suspense>
      </main>
    </>
  );
}
