const INITIAL_STATE = {
  estados: [],
  estadoSelecionado: "",
};

export const EstadosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ESTADO":
      return {
        ...state,
        estados: action.payload,
      };

    case "SELECTED_ESTADO":
      return {
        ...state,
        estadoSelecionado: action.payload,
      };

    case "CLEAR_ESTADO_SELECIONADO":
      return {
        ...state,
        estadoSelecionado: action.payload,
      };

    default:
      return state;
  }
};
