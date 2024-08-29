"use client";

import Image from "next/image";

import { Input } from "./ui/input";

const Searchbar = () => {
  return (
    <div className="searchbar">
      {/* <Image
        src="/assets/search-gray.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      /> */}
      <Input
        id="text"
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="rounded-lg dark:placeholder:text-white-1 placeholder:font-medium
         dark:bg-basicBg-dark border-white w-[218px]"
      />
    </div>
  );
};

export default Searchbar;
