"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Combobox from "./Combobox";
import ModeToggle from "./ModeToggle";
import Searchbar from "./Searchbar";
import { Button } from "./ui/button";

const Header = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    const query = e.target.value;
    router.push(`/?search=${query}`);
  };

  return (
    <div className="flex justify-between px-4 py-4">
      <div className="flex justify-between gap-3">
        <div className="flex gap-3 items-center">
          <p className="text-14 font-bold">Show</p>
          <Combobox />
        </div>
        <div className="flex gap-6 items-center">
          <p className="text-14 font-bold">Entries</p>
          <Searchbar handleSearch={handleSearch} />
        </div>
      </div>
      <div className="flex gap-3">
        <Button className="px-3 py-2 bg-violet-1 dark:hover:bg-accent dark:focus:bg-accent">
          <div className="flex-center gap-2">
            <Image
              src="/icons/plus.svg"
              alt="add-customer"
              width={20}
              height={20}
            />
            <span className="text-14 text-white-1 font-bold">Add Customer</span>
          </div>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
