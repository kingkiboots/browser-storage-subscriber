export const isSameJsonObj = (source: any, comparison: any): boolean => {
  try {
    return JSON.stringify(source) === JSON.stringify(comparison);
  } catch (error) {
    return false;
  }
};
