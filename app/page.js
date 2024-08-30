import React, { Suspense } from "react";

import Header from "@/components/Header";
import MainTable from "@/components/MainTable";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex-center w-full">
            <LoaderSpinner size={20} />
          </div>
        }
      >
        <Header />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex-center w-full">
            <LoaderSpinner size={40} />
          </div>
        }
      >
        <main>
          <MainTable />
        </main>
      </Suspense>
    </>
  );
}
