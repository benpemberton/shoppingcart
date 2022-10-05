import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99999;
  background-color: #6db4d4;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  font-family: Kanit;

  @media (max-width: 650px) {
    & {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
  }
`;

const LogoWrap = styled.div`
  a {
    font-size: 3rem;
    color: white;
    line-height: 1;
  }
`;

const RightHandLinks = styled.div `
  display: flex;
  gap: 2rem;
`

const UL = styled.ul`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  list-style: none;
`;

export { Nav, LogoWrap, RightHandLinks, UL };

