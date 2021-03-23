export const FILTERTYPES = "FILTER_TYPES";

export const FilterTypes = (tipo) => {
  return {
    type: FILTERTYPES,
    payload: tipo,
  };
};
