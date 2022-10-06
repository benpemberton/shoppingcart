import { useState, useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { setHeaderHeight, setScroll } from "../utils/displayHelpers";
import styled from "styled-components";

const PageLayout = () => {
  const location = useLocation();
  let outlet = useOutlet();
  const [currentOutlet, setCurrentOutlet] = useState(outlet);
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    setHeaderHeight();

    window.addEventListener("resize", setHeaderHeight);
  }, []);

  useEffect(() => {
    setIsRouting(false);
    let timeout = setTimeout(() => {
      setCurrentOutlet(outlet);
      setIsRouting(true);
      clearTimeout(timeout);
    }, 300);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <Main>
      <CSSTransition
        key={location.pathname}
        in={isRouting}
        timeout={300}
        // classNames="page-transition"
        unmountOnExit
        onEnter={() => setScroll("hidden")}
        onEntered={() => setScroll("auto")}
      >
        {currentOutlet}
      </CSSTransition>
    </Main>
  );
};

const Main = styled.main`
  padding-top: var(--headerHeight);
`;

export default PageLayout;
