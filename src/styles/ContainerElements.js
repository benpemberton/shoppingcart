import styled from "styled-components";

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--headerHeight);
  height: calc(100vh - var(--headerHeight));
`;

const CentreFlex = styled.div`
  display: flex;
  justify-content: centre;
  align-items: centre;
`;

export { PageWrap, CentreFlex };
