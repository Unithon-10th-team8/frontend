export const removeNull = (value: any): any => {
  return value === null ? undefined : value;
};
