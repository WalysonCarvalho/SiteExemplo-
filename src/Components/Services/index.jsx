import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import {
  Section,
  Container,
  Headline,
  Title,
  Description,
  CardsContainer,
  Card,
  CardTitle,
  CardIcon,
} from "./styles";

export function Services() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".card", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".containerService",
        //markers:true,
        start:"top 400px",
        end:"bottom 500px"
      },
    });

    return () => {
      gsap.killTweensOf(".card"); // Corrigido: função de limpeza em formato de retorno
    };
  }, []);

  return (
    <Section id="servicos">
      <Container >
        <Headline>
          <div>
            <Title>Serviços</Title>
          </div>
          <Description>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              amet vel maiores est illum expedita debitis numquam dolorum?
            </p>
          </Description>
        </Headline>
        <CardsContainer className="containerService">
          <Card className="card" id="card-1">
            <CardTitle>Lorem ipsum dolor sit.</CardTitle>
            <CardIcon>
              <i className="bi bi-share"></i>
            </CardIcon>
          </Card>
          <Card className="card" id="card-2">
            <CardTitle>Lorem ipsum dolor sit.</CardTitle>
            <CardIcon>
              <i className="bi bi-diagram-3"></i>
            </CardIcon>
          </Card>
          <Card className="card" id="card-3">
            <CardTitle>Lorem ipsum dolor sit.</CardTitle>
            <CardIcon>
              <i className="bi bi-globe"></i>
            </CardIcon>
          </Card>
          <Card className="card" id="card-4">
            <CardTitle>Lorem ipsum dolor sit.</CardTitle>
            <CardIcon>
              <i className="bi bi-currency-dollar"></i>
            </CardIcon>
          </Card>
          <Card className="card" id="card-5">
            <CardTitle>Lorem ipsum dolor sit.</CardTitle>
            <CardIcon>
              <i className="bi bi-layers"></i>
            </CardIcon>
          </Card>
          <Card className="card" id="card-6">
            <CardTitle>Lorem ipsum dolor sit.</CardTitle>
            <CardIcon>
              <i className="bi bi-camera-video"></i>
            </CardIcon>
          </Card>
        </CardsContainer>
      </Container>
    </Section>
  );
}
