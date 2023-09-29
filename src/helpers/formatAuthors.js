export const formatAuthors = (str) => {
  let arr = [];
  str = str.slice(0, str.lastIndexOf("<"));
  for (let itemStr of str.split(", ")) {
    let withStartIndex = itemStr.slice(9).indexOf(">");
    let withLastIndex = itemStr.slice(9).lastIndexOf("<");
    let author = itemStr.slice(9).slice(withStartIndex + 1, withLastIndex);
    arr.push(author);
  }

  return arr;
};
