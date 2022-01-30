export const setMunicipioAction = (item) => {
  return {
    type: "SET_MUNICIPIO",
    payload: item,
  };
};

export const setMunicipioSelected = (item) => {
  return {
    type: "SELECTED_MUNICIPIO",
    payload: item,
  };
};

export const clearMunicipios = () => {
  return {
    type: "CLEAR_MUNICIPIO",
  };
};
