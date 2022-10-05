import styled from "styled-components";

const CardWrap = styled.div`
  background-color: #fff;
  height: 24rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 5px;

  &:nth-child(even) {
    background-color: #fff;
  }

  img {
    object-fit: contain;
    max-height: 12rem;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.521);
    margin-bottom: 1.2rem;
  }
`;

const Details = styled.div`
  margin-bottom: 1.2rem;

  h3,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 0.8em;
    margin-top: 1%;
  }
`;

const AddItemArea = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { CardWrap, Details, AddItemArea };
