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
