import { Li } from '../styles/components/StyledFilterList'

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

export default FilterOption;
