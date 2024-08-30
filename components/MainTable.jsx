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
            <TableHead className="text-black font-bold dark:text-white-1">
              Product
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1">
              Customer
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1">
              Date
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1">
              Amount
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1">
              Payment Mode
            </TableHead>
            <TableHead className="text-black font-bold dark:text-white-1">
              Status
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
                  <p className="truncate">{customer.productName}</p>
                  <div
                    className="text-16 absolute left-11 hidden mt-2 bg-gray-200
               dark:bg-black text-white rounded-lg p-2 group-hover:block z-10"
                  >
                    {customer.productName}
                  </div>
                </div>
              </TableCell>
              <TableCell className=" ">{customer.customer}</TableCell>
              <TableCell className=" ">{customer.date}</TableCell>
              <TableCell className=" ">${customer.amount}</TableCell>
              <TableCell className=" ">{customer.paymentMode}</TableCell>
              <TableCell className=" ">{customer.status}</TableCell>
              <TableCell className="flex-center py-6.5">
                {customer.status}
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
