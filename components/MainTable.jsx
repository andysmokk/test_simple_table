"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "./PaginationComponent";
import { searchResult } from "@/lib/actions/search.actions";
import LoaderSpinner from "@/components/LoaderSpinner";
import { cn } from "@/lib/utils";
import { getStatusColor } from "@/lib/utils";

const MainTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const query = searchParams.get("search") || "";
    setSearchTerm(query);

    const itemsCount = parseInt(searchParams.get("itemsPerPage") || "10", 10);
    setItemsPerPage(itemsCount);

    const page = parseInt(searchParams.get("page") || "1", 10);
    setCurrentPage(page);

    setLoading(false);
  }, [searchParams]);

  const result = searchResult(searchTerm);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = result.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return (
      <div className="flex-center h-screen-88.5 w-full">
        <LoaderSpinner size={40} />
      </div>
    );
  }

  const handlePageChange = (page) => {
    router.push(
      `/?itemsPerPage=${itemsPerPage}&search=${searchTerm}&page=${page}`
    );
  };

  return (
    <div className="grid-container  ">
      <Table className="table-fixed w-full">
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-black font-bold dark:text-white-1 flex-center">
              Tracking ID
            </TableHead>
            <TableHead>
              <div className="flex items-center justify-between">
                <span className="text-black font-bold dark:text-white-1">
                  Product
                </span>
                <Image
                  src="/icons/sort.svg"
                  alt="sort"
                  width={16}
                  height={16}
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center justify-between">
                <span className="text-black font-bold dark:text-white-1">
                  Customer
                </span>
                <Image
                  src="/icons/sort.svg"
                  alt="sort"
                  width={16}
                  height={16}
                />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center justify-between">
                <span className="text-black font-bold dark:text-white-1">
                  Date
                </span>
                <Image
                  src="/icons/sort.svg"
                  alt="sort"
                  width={16}
                  height={16}
                />
              </div>
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1">
              Amount
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1">
              Payment Mode
            </TableHead>
            <TableHead>
              <div className="flex items-center justify-between">
                <span className="text-black font-bold dark:text-white-1">
                  Status
                </span>
                <Image
                  src="/icons/sort.svg"
                  alt="sort"
                  width={16}
                  height={16}
                />
              </div>
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1 flex-center">
              <div className="flex-center">Action</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((customer) => (
            <TableRow
              key={customer.trackingID}
              className="odd:bg-gray-100 dark:odd:bg-tableCellBg-dark"
            >
              <TableCell className="font-medium flex-center">
                #{customer.trackingID}
              </TableCell>
              <TableCell className="relative group">
                <div className="flex gap-2 items-center ">
                  <Image
                    src={customer.productImage}
                    alt={customer.productImage}
                    width={32}
                    height={32}
                    className="object-cover rounded-lg flex-shrink-0 flex-grow-0 w-8 h-8"
                  />
                  <span className="truncate font-medium">
                    {customer.productName}
                  </span>
                  <div
                    className="text-16 absolute left-11 hidden mt-2 bg-gray-200
               dark:bg-black text-white rounded-lg p-2 group-hover:block z-10"
                  >
                    {customer.productName}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="font-medium">{customer.customer}</span>
              </TableCell>
              <TableCell>
                <span className="font-medium">
                  {customer.date.split("-").reverse().join("/")}
                </span>
              </TableCell>
              <TableCell>
                <span className="font-medium">{customer.amount}</span>$
              </TableCell>
              <TableCell>
                <span className="font-medium">{customer.paymentMode}</span>
              </TableCell>
              <TableCell>
                <span
                  className={cn(
                    "py-2 px-4 bg-slate-500 rounded-full text-center font-medium",
                    getStatusColor(customer.status)
                  )}
                >
                  {customer.status}
                </span>
              </TableCell>
              <TableCell className="flex-center py-6.5">
                <div className="flex gap-4">
                  <Image
                    src="/icons/edit.svg"
                    alt="edit"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/icons/delete.svg"
                    alt="edit"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        totalItems={result.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MainTable;
