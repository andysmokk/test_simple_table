import { customersData } from "@/constants/index";

export const searchResult = (searchTerm) => {
  const filteredData = customersData.filter(
    (item) =>
      item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.trackingID.toString().includes(searchTerm) ||
      item.date.toString().includes(searchTerm) ||
      item.amount.toString().includes(searchTerm) ||
      item.paymentMode.toLowerCase().toString().includes(searchTerm) ||
      item.status.toLowerCase().toString().includes(searchTerm)
  );

  return filteredData;
};
