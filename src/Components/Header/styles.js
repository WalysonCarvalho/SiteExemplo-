import styled from "styled-components";

export const Container = styled.header`
  user-select: none;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 2rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  transition: top 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Logo = styled.div`
  width: 100%;

  img {
    width: 150px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: 100;
`;

export const Hamburger = styled.label`
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);

    .line {
      fill: none;
      stroke: white;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line-top-bottom {
      stroke-dasharray: 12 63;
    }
  }

  input:checked + svg {
    transform: rotate(-45deg);

    .line-top-bottom {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  }
`;

export const MenuAberto = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: #f0c040;
    }
  }
`;

