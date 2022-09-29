const FilterOption = ({ text, filter, filterItems, currentFilter }) => {
  return (
    <li
      onClick={() => {
        filterItems(...filter);
      }}
      className={currentFilter === text ? "active" : "inactive"}
    >
      <span>{text}</span>
    </li>
  );
};

export default FilterOption;
