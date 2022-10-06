import styled from "styled-components";

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: calc(100vh - var(--headerHeight));
  width: 100%;

  &.appear {
    opacity: 0;
    transform: scale(1.1);
  }

  &.appear-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }

  &.enter {
    opacity: 0;
    transform: scale(1.1);
  }

  &.enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }

  &.exit {
    opacity: 1;
    transform: scale(1);
  }

  &.exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: all 300ms;
  }
`;

const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { PageWrap, CenterFlex };
