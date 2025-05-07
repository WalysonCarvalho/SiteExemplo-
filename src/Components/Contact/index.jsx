import { 
  Container, 
  Headline, 
  Title, 
  Description, 
  ContactList, 
  Content, 
  FormContainer, 
  Form, 
  Input, 
  TextArea, 
  Button, 
  LogoContainer 
} from "./styles";
import foto1 from '../../assets/cecelia-chang-nquucodQqAc-unsplash.jpg'

export function Contact() {
  return (
    <Container>
      <section id="contato" className="contato">
        <div className="container-contato" data-aos="fade-up" data-aos-duration="1000">
          <Headline data-aos="fade-up" data-aos-delay="200">
            <Title>
              <h1>Contato</h1>
            </Title>
            <Description>
              <ContactList>
                <li><a href="#">WhatsApp: (55) 99999 - 9999</a></li>
                <li><a href="#">email@seuemail.com.br</a></li>
                <li><a href="#">Endereço Completo</a></li>
              </ContactList>
            </Description>
          </Headline>
          <Content >
            <FormContainer>
              <h2>Entre em contato</h2>
              <p>Entre em contato.</p>
              <Form>
                <Input type="text" placeholder="Digite seu nome completo" />
                <Input type="phone" placeholder="(55) 22222-2222" />
                <Input type="email" placeholder="Seu melhor email" />
                <TextArea name="mensagem" id="mensagem" placeholder="Escreva o que você deseja aqui..."></TextArea>
                <Button type="submit">Enviar</Button>
              </Form>
            </FormContainer>
            <LogoContainer >
              <img src={foto1} alt="Logo" />
            </LogoContainer>
          </Content>
        </div>
      </section>
    </Container>
  );
}
