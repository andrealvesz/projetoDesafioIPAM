const BASE_URL = "https://servicodados.ibge.gov.br/api";

export default {
  getEstados: async () => {
    try {
      const req = await fetch(`${BASE_URL}/v1/localidades/estados?orderBy=nome`);
      const json = req.json();
      return json;
    } catch (error) {
      console.error("API:GET_ESTADOS::ERROR", error);
    }
  },

  getMunicipios: async (uf) => {
    try {
      const req = await fetch(
        `${BASE_URL}/v1/localidades/estados/${uf}/municipios?orderBy=nome`
      );
      const json = req.json();
      return json;
    } catch (error) {
      console.error("API:GET_MUNICIPIOS::ERROR", error);
    }
  },

  getInfoMunicipio: async (municipio) => {
    try {
      const req = await fetch(
        `${BASE_URL}/v1/localidades/municipios/${municipio}/distritos`
      );
      const json = req.json();
      return json;
    } catch (error) {
      console.error("API:GET_INFO_MUNICIPIOS::ERROR", error);
    }
  },
};
