import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99999;
  background-color: ${({ theme }) => theme.colours.lightBlue};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

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
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: white;
    line-height: 1;
  }
`;

const RightHandLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const UL = styled.ul`
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  list-style: none;
`;

export { Nav, LogoWrap, RightHandLinks, UL };
