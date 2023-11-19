export const formatAuthors = (str: string) => {
  const arr: string[] = [];
  str = str.slice(0, str.lastIndexOf("<"));
  for (const itemStr of str.split(", ")) {
    const withStartIndex = itemStr.slice(9).indexOf(">");
    const withLastIndex = itemStr.slice(9).lastIndexOf("<");
    const author: string = itemStr.slice(9).slice(withStartIndex + 1, withLastIndex);
    arr.push(author);
  }

  return arr;
};
