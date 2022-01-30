import { createStore, combineReducers } from "redux";
import { EstadosReducer,  } from "../reducers/EstadosReducer";
import { MunicipiosReducer } from "../reducers/MunicipiosReducer";

const rootReducer = combineReducers({
  estados: EstadosReducer,
  municipios: MunicipiosReducer,
});

export const store = createStore(rootReducer);
