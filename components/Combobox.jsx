"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { numberOfRows } from "@/constants/index";
// import LoaderSpinner from "@/components/LoaderSpinner";

const Combobox = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  // const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // setLoading(true);

    const itemsCount = searchParams.get("itemsPerPage") || "10";
    setValue(itemsCount);

    // setLoading(false);
  }, [searchParams]);

  const handleSelect = (currentValue) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setOpen(false);

    const searchQuery = searchParams.get("search") || "";

    if (searchQuery) {
      router.push(`/?itemsPerPage=${newValue}&search=${searchQuery}`);
    } else {
      router.push(`/?itemsPerPage=${newValue}`);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[55px] gap-1 bg-white-2 py-2 px-2 text-black
           font-medium dark:bg-bg-dark dark:text-text-dark dark:hover:bg-accent dark:focus:bg-accent"
        >
          {/* {!loading ? (
            value ? (
              numberOfRows.find((number) => number.value === value)?.label
            ) : (
              "10"
            )
          ) : (
            <div className="flex-center w-full">
              <LoaderSpinner size={20} />
            </div>
          )}
          {!loading && (
            <Image
              src="/icons/caret-down.svg"
              alt="caret-down"
              width={10}
              height={10}
            />
          )} */}
          {value
            ? numberOfRows.find((number) => number.value === value)?.label
            : "10"}
          <Image
            src="/icons/caret-down.svg"
            alt="caret-down"
            width={10}
            height={10}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[70px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {numberOfRows.map((number) => (
                <CommandItem
                  className="cursor-pointer"
                  key={number.value}
                  value={number.value}
                  onSelect={() => handleSelect(number.value)}
                >
                  {number.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === number.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
