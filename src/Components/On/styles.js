import styled from "styled-components";

export const Container = styled.div``;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.COLORS.COLOR_BLACK};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  z-index: 1;
  user-select: none;
  overflow: visible;
`;

export const HeadlineSobre = styled.div`
  width: 100%;
  height: 30%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  padding-left: 1rem;

  .headline-scroll {
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: scroll 20s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%); /* Inicia fora da tela pela direita */
    }
    100% {
      transform: translateX(-100%); /* Sai pela esquerda */
    }
  }

  .headline-scroll span {
    font-family: "Poppins", sans-serif;
    font-size: 5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  .divisor {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    border-radius: 50%;
    margin: 0 20px;
  }

  .bold {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  }

  .light {
    font-weight: lighter;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 1000px;

    height: auto;
    padding-left: 0;
    .headline-scroll span {
      font-size: 2.5rem;
    }
  }
`;

// Componente principal que abriga LeftSobre e RightSobre
export const ConteudoSobre = styled.div`
  position: relative;
  top: 30%;
  width: 100%;
  height: 70%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

// Estilos para a seção à esquerda
export const LeftSobre = styled.div`
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  margin-top: 15rem;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;

  .textos-sobre h1 {
    font-size: 3rem;
    font-family: var(--font-grande);
  }

  .textos-sobre p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 1.5px;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    width: 375px;
    max-width: 100%;
    align-items: center;
    text-align: center;

    .textos-sobre h1 {
      font-size: 2rem;
    }

    .textos-sobre p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 720px) {
    .textos-sobre h1 {
      font-size: 1.8rem;
    }

    .textos-sobre p {
      font-size: 1rem;
    }
  }

  @media (max-width: 375px) {
    .textos-sobre h1 {
      font-size: 1.5rem;
    }

    .textos-sobre p {
      font-size: 0.9rem;
    }
  }
`;

// Estilos para as redes sociais
export const RedesSociais = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  a {
    display: flex;
    justify-content: space-between;
    text-decoration: none;

    font-size: 1.5rem;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    a {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 375px) {
    a {
      font-size: 0.9rem;
    }
  }
`;

// Estilos para a seção à direita
export const RightSobre = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 15rem;

  .imagem-sobre {
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative; /* Alterado para relative */

    img {
      width: 500px; /* Proporcional para telas grandes */
      z-index: 80;
      display: block; /* Altera para block para imagens visíveis */
    }
  }

  .complemento-sobre {
    width: auto;
    z-index: 0;

    img {
      position: relative;
      left: 50px;
      top: 50px;
      width: 90%;
      z-index: 1000;
      animation: rotate 20s linear infinite;
      display: none;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;

    .imagem-sobre img {
      margin-top: -13rem;
      width: 200px;
      border-radius: 8px;
    }
  }

  @media (max-width: 375px) {
    .imagem-sobre {
      margin-top: 13rem;
      flex-direction: column; 
      align-items: center; 
    }

    .imagem-sobre img {
      width: 100%;
      max-width: 300px; 
    }

    .complemento-sobre img {
      width: 100%; 
      max-width: 300px; 
      left: 0; 
      top: 0;
    }
  }
`;
