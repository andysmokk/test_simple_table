import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getStatusColor = (status) => {
  switch (status) {
    case "Cancelled":
      return "text-status-red bg-bgStatus-red";
    case "Delivered":
      return "text-status-green bg-bgStatus-green";
    case "Process":
      return "text-status-orange bg-bgStatus-orange";
    default:
      return "text-gray-500 bg-gray-100";
  }
};
