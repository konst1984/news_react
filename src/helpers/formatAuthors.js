export const formatAuthors = (str) => {
  let arr = [];
  for (let itemStr of str.split(", ")) {
    let index = itemStr.slice(9).indexOf(">");
    let author = itemStr.slice(9).slice(index + 1, -5);
    arr.push(author);
  }

  return arr;
};
