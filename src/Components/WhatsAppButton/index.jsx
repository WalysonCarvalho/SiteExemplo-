import React from 'react';
import { Container, FixedButton, Icon } from './styles';
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <Container>
      <FixedButton id="whatsappButton">
      <FaWhatsapp size={60}/>
      </FixedButton>
    </Container>
  );
}
