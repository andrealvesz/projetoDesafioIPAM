import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearEstadoSelected } from "../../redux/actions/EstadosActions";
import { clearMunicipios } from "../../redux/actions/MunicipiosActions";

import {
  Container,
  Card,
  TitleCardText,
  Separator,
  TitleAreas,
  TitleAreasText,
} from "./styles";

import api from "../../services/api";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const override = css`
  margin: 20px 0 30px;
`;

export const CardInfoMunicipio = () => {
  const dispatch = useDispatch();
  const municipio = useSelector(
    (state) => state.municipios.municipioSelecionado
  );

  let [loading, setLoading] = useState(false);
  const [municipioInfo, setMunicipioInfo] = useState([]);

  useEffect(() => {
    console.log("CARD_INFO::", municipioInfo);
    getInfoMunicipio();
  }, [municipio]);

  const getInfoMunicipio = async () => {
    try {
      setLoading(true);
      const response = await api.getInfoMunicipio(municipio);
      console.log("MUNICIPIO_INFO::", response);
      setMunicipioInfo(response);
    } catch (error) {
      console.error("CARD::GET_INFO_MUNICIPIO::ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setMunicipioInfo([]);
    dispatch(clearMunicipios());
    dispatch(clearEstadoSelected());
  };

  return (
    <Container>
      {municipioInfo.length > 0 && (
        <>
          {loading && (
            <DotLoader
              color={"#556BC2"}
              loading={loading}
              size={30}
              css={override}
            />
          )}

          {!loading && (
            <Card>
              <TitleCardText>
                Município:{" "}
                <TitleAreasText>
                  {municipioInfo[0].municipio.nome}
                </TitleAreasText>{" "}
              </TitleCardText>
              <Separator />
              <TitleAreas>
                Microrregião:{" "}
                <TitleAreasText>
                  {municipioInfo[0].municipio.microrregiao.nome}
                </TitleAreasText>{" "}
              </TitleAreas>
              <TitleAreas>
                Mesorregião:{" "}
                <TitleAreasText>
                  {municipioInfo[0].municipio.microrregiao.mesorregiao.nome}
                </TitleAreasText>{" "}
              </TitleAreas>
              <TitleAreas>
                UF:{" "}
                <TitleAreasText>
                  {municipioInfo[0].municipio.microrregiao.mesorregiao.UF.nome}
                </TitleAreasText>{" "}
              </TitleAreas>
              <TitleAreas>
                Região:{" "}
                <TitleAreasText>
                  {
                    municipioInfo[0].municipio.microrregiao.mesorregiao.UF
                      .regiao.nome
                  }
                </TitleAreasText>{" "}
              </TitleAreas>
              <Separator />
              <button onClick={reset}>Nova Pesquisa</button>
            </Card>
          )}
        </>
      )}
    </Container>
  );
};
