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
      {/* <Image
        src="/assets/search-gray.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      /> */}
      <Input
        id="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="rounded-lg dark:placeholder:text-white-1 placeholder:font-medium
         dark:bg-basicBg-dark border-white w-[218px]"
      />
    </div>
  );
};

export default Searchbar;
