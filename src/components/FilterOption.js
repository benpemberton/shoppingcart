import styled from "styled-components";

const FilterOption = ({ text, filter, filterItems, currentFilter }) => {
  return (
    <Li
      onClick={() => {
        filterItems(...filter);
      }}
      className={currentFilter === text ? "active" : "inactive"}
    >
      <span>{text}</span>
    </Li>
  );
};

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

export default FilterOption;
