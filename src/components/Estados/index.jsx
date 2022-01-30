import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  setEstadoAction,
  setEstadoSelected,
} from "../../redux/actions/EstadosActions";
import api from "../../services/api";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const Estados = () => {
  const dispatch = useDispatch();
  const estados = useSelector((state) => state.estados.estados);
  const estadoSelecionado = useSelector(
    (state) => state.estados.estadoSelecionado
  );

  useEffect(() => {
    getEstados();
  }, []);

  const getEstados = async () => {
    try {
      const response = await api.getEstados();
      dispatch(setEstadoAction(response));
    } catch (error) {
      console.error("ESTADOS:GET_ESTADOS::ERROR", error);
    }
  };

  const handleChange = (event) => {
    dispatch(setEstadoSelected(event.target.value));
  };

  return (
    <Container>
      <FormControl sx={{ minWidth: "60%" }}>
        <InputLabel id="labelEstados">Estados</InputLabel>
        <Select
          labelId="labelEstados"
          id="selectEstados"
          autoWidth
          value={estadoSelecionado}
          label="estados"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          <MenuItem value="vazio">
            <em>Escolha um estado</em>
          </MenuItem>
          {estados.length > 0 &&
            estados.map((item) => (
              <MenuItem key={item.id} value={item.sigla}>
                {item.nome}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Container>
  );
};
