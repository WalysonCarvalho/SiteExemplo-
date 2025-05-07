import { Container, Main, ConteudoInicio, BotaoCta } from "./styles";


export function Start() {
  return (
    <Container>
      <Main id="inicio">
        <div className="container-inicio">
          <ConteudoInicio>
            <div className="titulo-inicio">
              <h1>Lorem ipsum</h1>
              <h1 className="destaque-inicio">Lorem ipsum dolor</h1>
            </div>
            <div
              className="paragrafo-inicio">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                deserunt laboriosam eum nisi delectus ab ad expedita! Earum.
              </p>
            </div>
            <BotaoCta>
              <span>Fale Conosco</span>
              
            </BotaoCta>
          </ConteudoInicio>
          
        </div>
      </Main>
    </Container>
  );
}
