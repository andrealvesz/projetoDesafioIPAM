const INITIAL_STATE = {
  municipios: [],
  municipioSelecionado: "",
};

export const MunicipiosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MUNICIPIO":
      return {
        ...state,
        municipios: action.payload,
      };

    case "SELECTED_MUNICIPIO":
      return {
        ...state,
        municipioSelecionado: action.payload,
      };

    case "CLEAR_MUNICIPIO":
      return INITIAL_STATE;

    default:
      return state;
  }
};
