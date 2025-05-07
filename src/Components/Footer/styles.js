import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
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

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.COLOR_BLACK};
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const FooterInnerContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const FooterColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoColumn = styled(FooterColumn)`
  align-items: flex-start;

  img {
    width: 100px;
  }
`;

export const MenuColumn = styled(FooterColumn)`
  text-align: center;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.COLORS.COLOR_DESTAQUE1};
    }
  }
`;

export const SocialColumn = styled(FooterColumn)`
  text-align: right;
`;

export const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;

    i {
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${({ theme }) => theme.COLORS.COLOR_DESTAQUE1};
    }
  }
`;

export const CreditsColumn = styled(FooterColumn)`
  text-align: right;
  font-size: 0.9rem;
  text-decoration: none;
  

  p {
    margin: 0.2rem 0;
    color:${({ theme }) => theme.COLORS.COLOR_WHITE}

  }
`;
