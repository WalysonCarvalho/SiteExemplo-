import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import {
  Container,
  Headline,
  TextHeadline,
  Content,
  BoxSkill,
  Icon,
} from "./styles";

export function Section() {
  const el = useRef();
  const tl = useRef();
  const textTl = useRef(); // Ref para o timeline do texto
  const skill = useRef(); // Ref para o texto

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top 300px",
          end: "bottom 500px",
          scrub: true,
           
        },
      })
        .fromTo(
          "#box-1",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          "#box-2",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 2 },
          "-=0.5"
        )
        .fromTo(
          "#box-3",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 3 },
          "-=0.5"
        )
        .fromTo(
          "#box-4",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 4 },
          "-=0.5"
        );
    }, el);

    return () => ctx.revert(); 
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
    textTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: skill.current,
        start: "top 90%", 
        end: "bottom 80%",
        //scrub: true,
        //markers: true,
      
      },
    }).fromTo(
      skill.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2 },
      "-=0.5"
    );

    return () => textTl.current.scrollTrigger.kill(); // Limpeza do ScrollTrigger ao desmontar
  }, []);

  return (
    <Container>
      <div>
        <Headline ref={skill}> 
          <TextHeadline>
            <h2>Minhas Skills</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              molestias libero consequuntur.
            </p>
          </TextHeadline>
        </Headline>
        <Content ref={el} className="container">
          <BoxSkill className="box" id="box-1">
            <Icon />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </BoxSkill>
          <BoxSkill className="box" id="box-2">
            <Icon />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </BoxSkill>
          <BoxSkill className="box" id="box-3">
            <Icon />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </BoxSkill>
          <BoxSkill className="box" id="box-4">
            <Icon />
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </BoxSkill>
        </Content>
      </div>
    </Container>
  );
}
