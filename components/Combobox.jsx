"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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

const Combobox = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const value = searchParams.get("itemsPerPage") || "10";

  const selectedLabel = useMemo(() => {
    return numberOfRows.find((number) => number.value === value)?.label || "10";
  }, [value]);

  const handleSelect = (newValue) => {
    const searchQuery = searchParams.get("search") || "";

    if (searchQuery) {
      router.push(`/?itemsPerPage=${newValue}&search=${searchQuery}`);
    } else {
      router.push(`/?itemsPerPage=${newValue}`);
    }

    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={true}
          className="w-[55px] gap-1 bg-white-2 py-2 px-2 text-black
           font-medium dark:bg-bg-dark dark:text-text-dark dark:hover:bg-accent dark:focus:bg-accent"
        >
          {selectedLabel}
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
