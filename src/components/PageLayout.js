import { useState, useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const PageLayout = () => {
  const location = useLocation();
  let outlet = useOutlet();
  const [currentOutlet, setCurrentOutlet] = useState(outlet);
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    setIsRouting(false);
    let timeout = setTimeout(() => {
      setCurrentOutlet(outlet);
      setIsRouting(true);
      clearTimeout(timeout);
    }, 300);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  function setScroll(type) {
    const body = document.querySelector("body");
    body.style.overflowY = type;
  }

  return (
    <div>
      <CSSTransition
        key={location.pathname}
        in={isRouting}
        timeout={300}
        classNames="page-transition"
        unmountOnExit
        onEnter={() => setScroll("hidden")}
        onEntered={() => setScroll("auto")}
      >
        {currentOutlet}
      </CSSTransition>
    </div>
  );
};

export default PageLayout;
