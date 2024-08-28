import jsonData from "./data";

const jsonString = JSON.stringify(jsonData);
const dataArray = JSON.parse(jsonString);

export const data = dataArray;
