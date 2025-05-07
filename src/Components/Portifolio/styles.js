import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 7rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const PortfolioSection = styled.section`
  width: 100%;
  height: 100%;
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeadlinePortfolio = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    text-align: center;

    font-size: 1rem;
    width: 375px;
    text-align: center;
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  width: 50%;
  font-size: 8vw;
  font-weight: lighter;
  font-family: var(--font-grande);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 6vw;
    text-align: center;
  }
`;

export const Description = styled.span`
  width: 50%;
  font-size: 2rem;
  text-align: right;
  line-height: 1.4;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 1rem;
  }
`;

export const CaseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 768px) {
    gap: 4rem;

    height: auto;
    flex-direction: column;
    text-align: center;

    font-size: 1rem;
    width: 375px;
    text-align: center;
    padding: 2rem;
    
  
  }
`;

export const Case = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
  }
`;

export const ImagesCase = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }

  img {
    width: 680px;
    height: 330px;
    object-fit: cover;
    object-position: center;

  }
`;

export const PrevNextIcon = styled.i`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  font-size: 2rem;
  user-select: none;
  transform: translateY(-50%);
  border-radius: 50%;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextsCase = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    text-align: center;
    order: ${(props) => (props.reverse ? 1 : 2)};
  }
`;

export const ContentTextsCase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    font-size: 6vw;
    letter-spacing: 3px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.COLOR_GRAY2};
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: 1.5px;
    padding-bottom: 1.5rem;
  }

  .typeService {
    width: 180px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    border-radius: 50px;
    color: ${({ theme }) => theme.COLORS.COLOR_BLACK};
    font-weight: bold;
    letter-spacing: 1.2px;


  }

  @media (max-width: 768px) {
    h1 {
      font-size: 5vw;
    }

    p {
      font-size: 1.3rem;
    }

    .typeService{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      font-size: 1rem;
    }
  }
`;
