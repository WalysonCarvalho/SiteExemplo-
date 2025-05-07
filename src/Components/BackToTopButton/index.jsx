import { Container, FixedButton, Icon } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export function BackToTopButton() {
  return (
    <Container>
      <FixedButton id="backToTop">
      <FaWhatsapp size={60}/>

      </FixedButton>
    </Container>
  );
}
