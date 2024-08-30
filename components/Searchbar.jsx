"use client";

import Image from "next/image";
import { useState } from "react";

import { Input } from "./ui/input";

const Searchbar = ({ handleSearch }) => {
  const [searchTherm, setSearchTherm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTherm(value);
    handleSearch(e);
  };


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
        value={searchTherm}
        onChange={handleChange}
        placeholder="Search..."
        className="rounded-lg dark:placeholder:text-white-1 placeholder:font-medium
         dark:bg-basicBg-dark border-white w-[218px]"
      />
    </div>
  );
};

export default Searchbar;
