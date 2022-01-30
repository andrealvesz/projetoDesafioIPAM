export const setEstadoAction = (item) => {
  return {
    type: "SET_ESTADO",
    payload: item,
  };
};

export const setEstadoSelected = (item) => {
  return {
    type: "SELECTED_ESTADO",
    payload: item,
  };
};

export const clearEstadoSelected = () => {
  return {
    type: "CLEAR_ESTADO_SELECIONADO",
    payload: '',
  };
};
