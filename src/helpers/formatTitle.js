export const formatStr = (str) => {
  const indexTarget = str.search("arXiv");
  if (indexTarget > -1) {
    str = str.slice(0, indexTarget - 2);
  }
  return str;
};
