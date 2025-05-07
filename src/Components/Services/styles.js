import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  width: 100vw;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Headline = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.COLOR_BLACK};
  font-size: 8vw;
  font-weight: lighter;
  font-family: var(--font-grande);
  width: 50%;
`;

export const Description = styled.div`
  width: 50%;
  font-size: 2rem;
  text-align: right;
  line-height: 1.4;
  letter-spacing: 1.5px;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;


export const Card = styled.div`
  background: blue;
  border: 1px solid hsla(0, 0%, 0%, 0.35);
  max-width: 95%;
  min-height: 180px;
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  opacity: 0; 

  /* Transformação inicial alternada por ID */
  &#card-1, &#card-3, &#card-5 {
    transform: translateX(-800px); 
  }
  
  &#card-2, &#card-4, &#card-6 {
    transform: translateX(800px);  
  }
`;


export const CardLeft = styled(Card)`
  margin-left: 5%;
`;

export const CardTitle = styled.h1`
  width: 68%;
  font-size: clamp(0.8rem, 2.5vw + 0.4rem, 2rem);
  font-family: var(--font-pequena);
  font-weight: normal;
`;

export const CardIcon = styled.div`
  width: 25%;
  max-width: 120px;
  height: 60px;
  border: 1px solid hsla(0, 0%, 0%, 0.35);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY1};
    margin-bottom: -7px;
  }
`;

export const FreeYourMindContainer = styled.section`
  background-color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-family: var(--font-grande);
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.className === "center"
      ? "center"
      : props.className === "right"
      ? "flex-end"
      : "flex-start"};
`;

export const Line = styled.span`
  flex-grow: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
  margin: 0 4rem;
  display: inline-block;
`;
