import { Header } from "./components/Header";
import { Container, ContentView } from "./styles/main";
import { Estados } from "./components/Estados";
import { Municipios } from "./components/Municipios";
import { CardInfoMunicipio } from "./components/CardInfoMunicipio";

function App() {
  return (
    <Container>
      <Header />
      <ContentView>
        <Estados />
        <Municipios />
        <CardInfoMunicipio />
      </ContentView>
    </Container>
  );
}

export default App;
