import styled from "styled-components";

const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;

  ul {
    list-style: none;
    font-size: 1.2rem;
  }
`;

const Li = styled.li`
  display: inline;
  margin: 0 0.5rem;
  cursor: pointer;

  &.active {
    display: inline;
    margin: 0 0.5rem;
    text-decoration: underline;
  }
`;

export { ListWrap, Li }