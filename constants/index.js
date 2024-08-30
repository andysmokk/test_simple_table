import jsonData from "./data";

const jsonString = JSON.stringify(jsonData);
const dataArray = JSON.parse(jsonString);

const convertKeysOfObject = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = key
      .replace(/ ([a-z])/g, (match, letter) => letter.toUpperCase())
      .replace(/ /g, "")
      .replace(/^(.)/, (match, letter) => letter.toLowerCase());

    acc[newKey] = obj[key];
    return acc;
  }, {});
};

const transformedData = dataArray.map((item) => convertKeysOfObject(item));

export const customersData = transformedData;

export const numberOfRows = [
  {
    value: "5",
    label: "5",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "25",
    label: "25",
  },
];
