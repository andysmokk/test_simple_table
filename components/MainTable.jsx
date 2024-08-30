"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { customersData } from "../constants/index";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const MainTable = () => {
  return (
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
        {customersData.map((customer) => (
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
  );
};

export default MainTable;
