"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "./ui/input";

const Searchbar = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const router = useRouter();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    const itemsCount = searchParams.get("itemsPerPage") || "10";

    if (query) {
      router.push(`/?itemsPerPage=${itemsCount}&search=${query}`);
    } else {
      router.push(`/?itemsPerPage=${itemsCount}`);
    }
  };

  return (
    <div className="searchbar">
      <div className="flex relative">
        <Input
          id="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="rounded-lg dark:placeholder:text-white-1 placeholder:font-medium
         dark:bg-basicBg-dark border-white w-[218px] pl-10"
        />
        <Image
          src="/icons/search.svg"
          alt="search"
          width={19}
          height={19}
          className="absolute top-3 left-3"
        />
      </div>
    </div>
  );
};

export default Searchbar;
