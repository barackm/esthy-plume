const truncatedStr = (str, len) => {
  let newStr = "";
  if (str.length > len) {
    newStr = str.slice(0, len - 3).concat("...");
  } else {
    newStr = str;
  }
  return newStr;
};

export default truncatedStr;
