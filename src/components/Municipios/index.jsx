import { useEffect } from "react";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  setMunicipioAction,
  setMunicipioSelected,
} from "../../redux/actions/MunicipiosActions";
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

export const Municipios = () => {
  const dispatch = useDispatch();
  const ufSelected = useSelector((state) => state.estados.estadoSelecionado);
  const municipios = useSelector((state) => state.municipios.municipios);
  const municipioSelected = useSelector(
    (state) => state.municipios.municipioSelecionado
  );

  useEffect(() => {
    console.log("SELECTOR::", ufSelected);
    getMunicipios();
  }, [ufSelected]);

  useEffect(() => {
    console.log("Municipios::", municipios);
    console.log("municipioSelected::", municipioSelected);
  }, [municipios, municipioSelected]);

  const getMunicipios = async () => {
    try {
      const response = await api.getMunicipios(ufSelected);
      dispatch(setMunicipioAction(response));
    } catch (error) {
      console.error("MUNICIPIOS:GET_MUNICIPIOS::ERROR", error);
    }
  };

  const handleChange = (event) => {
    console.log("EVENT::", event.target.value);
    dispatch(setMunicipioSelected(event.target.value));
  };

  return (
    <Container>
      {ufSelected.length > 0 && (
        <FormControl sx={{ minWidth: '60%' }}>
          <InputLabel id="labelMunicipios">Municípios</InputLabel>
          <Select
            labelId="labelMunicipios"
            id="selectMunicipios"
            autoWidth
            value={municipioSelected}
            label="municipios"
            onChange={handleChange}
            MenuProps={MenuProps}
          >
            <MenuItem value="vazio">
              <em>Escolha um município</em>
            </MenuItem>
            {municipios.length > 0 &&
              municipios.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.nome}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}
    </Container>
  );
};
