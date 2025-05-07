import React from 'react';
import {
  Container,
  PortfolioSection,
  PortfolioContainer,
  HeadlinePortfolio,
  Title,
  Description,
  CaseContainer,
  Case,
  ImagesCase,
  Slide,
  PrevNextIcon,
  TextsCase,
  ContentTextsCase,
} from "./styles";

import foto1 from '../../assets/cecelia-chang-nquucodQqAc-unsplash.jpg';


export function Portifolio() {
  return (
    <Container >
      <PortfolioSection>
        <PortfolioContainer id="portifolio">
          <HeadlinePortfolio>
            <Title id="portfolio">Portfolio</Title>
            <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere consequuntur odit, dolorem architecto optio vitae perspiciatis!</Description>
          </HeadlinePortfolio>
          <CaseContainer>
            {Array.from({ length: 4 }, (_, index) => (
              <Case key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={200 * (index + 1)}>
                <ImagesCase>
                  <Slide>
                    <PrevNextIcon  />
                    <img src={foto1} alt="Slide 1" />
                    
                    <PrevNextIcon />
                  </Slide>
                </ImagesCase>
                <TextsCase>
                  <ContentTextsCase>
                    <h1>CLIENTE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique quibusdam expedita magnam enim hic illum? Laudantium, deserunt?</p>
                    <span className='typeService'>Tipo do serviço</span>
                  </ContentTextsCase>
                </TextsCase>
              </Case>
            ))}
          </CaseContainer>
        </PortfolioContainer>
      </PortfolioSection>
    </Container>
  );
}
