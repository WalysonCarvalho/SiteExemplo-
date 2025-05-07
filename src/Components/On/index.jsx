import { Container, Section, HeadlineSobre, ConteudoSobre, LeftSobre, RightSobre, RedesSociais } from "./styles";
import foto1 from '../../assets/cecelia-chang-nquucodQqAc-unsplash.jpg'

export function On() {
  return (
    <Container>
      <Section id="sobre">
        <div className="container-sobre">
          <HeadlineSobre >
            <div className="headline-scroll" id="headline-scroll">
              <span className="bold">SOBRE</span>
              <span className="divisor"></span>
              <span className="light">SOBRE</span>
              <span className="divisor"></span>
              <span className="bold">SOBRE</span>
              <span className="divisor"></span>
              <span className="light">SOBRE</span>
              <span className="divisor"></span>
              <span className="bold">SOBRE</span>
              <span className="divisor"></span>
              <span className="light">SOBRE</span>
              <span className="divisor"></span>
            </div>
          </HeadlineSobre>
          <ConteudoSobre>
            <LeftSobre >
              <div className="textos-sobre">
                <h1>Olá, me chamo Seu Nome</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis quod quis nemo provident dignissimos.
                </p>
              </div>
              <RedesSociais>
                <a href="#">
                  INSTAGRAM<i className="bi bi-arrow-right"></i>
                </a>
                <a href="#">
                  GITHUB<i className="bi bi-arrow-right"></i>
                </a>
                <a href="#">
                  FACEBOOK<i className="bi bi-arrow-right"></i>
                </a>
                <a href="#">
                  LINKEDIN<i className="bi bi-arrow-right"></i>
                </a>
              </RedesSociais>
            </LeftSobre>
            <RightSobre >
              <div className="imagem-sobre">
                <img src={foto1} alt="" />
              </div>
              
            </RightSobre>
          </ConteudoSobre>
        </div>
      </Section>
    </Container>
  );
}
