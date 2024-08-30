import React, { Suspense } from "react";

import Header from "@/components/Header";
import MainTable from "@/components/MainTable";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderSpinner size={40} />}>
        <main>
          <MainTable />
        </main>
      </Suspense>
    </>
  );
}
