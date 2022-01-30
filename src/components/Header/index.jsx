import { Container, Logo } from "./styles";

import LogoIBGE from '../../assets/image/logo.png';

export const Header = () => {
  return (
    <Container>
      <Logo src={LogoIBGE} alt="Logo IBGE"/>
    </Container>
  );
};
