import { 
  Container, 
  FooterSection, 
  FooterInnerContainer, 
  FooterColumn, 
  LogoColumn, 
  MenuColumn, 
  SocialColumn, 
  FooterNav, 
  SocialLinks, 
  CreditsColumn 
} from "./styles";

export function Footer() {
  return (
    <Container>
      <FooterSection id="footer">
        <FooterInnerContainer>
          <LogoColumn className="footer-column">
            <img src="assets/img/SUA-LOGO-AQUI.png" alt="Logo" />
          </LogoColumn>
          <MenuColumn className="footer-column">
            <FooterNav>
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contato">Contato</a>
            </FooterNav>
          </MenuColumn>
          <SocialColumn className="footer-column">
            <SocialLinks>
              <li><a href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="bi bi-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
            </SocialLinks>
          </SocialColumn>
        </FooterInnerContainer>
        <CreditsColumn className="footer-column">
          <p>&copy; 2024 Todos os direitos reservados.</p>
          <p>Desenvolvido por <a  target="_blank" rel="noopener noreferrer" href=  "https://www.linkedin.com/in/walyson-carvalho/">Walyson Carvalho</a>│Dev.</p>
        </CreditsColumn>
      </FooterSection>
    </Container>
  );
}
