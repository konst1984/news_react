export const formatStr = (str: string):string => {
  if (str != null) {
    const indexTarget = str.search("arXiv");
    if (indexTarget > -1) {
      str = str.slice(0, indexTarget - 2);
    }
  }
  return str;
};
