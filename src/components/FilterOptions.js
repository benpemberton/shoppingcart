const FilterOptions = ({ filterItems }) => {
  return (
    <div className="filter-wrap">
      <div className="filter">
        <ul>
          <li onClick={() => filterItems("Show all")}>
            <a href="#">Show all</a>
          </li>
          |
          <li onClick={() => filterItems("Ale")}>
            <a href="#">Ale</a>
          </li>
          |
          <li onClick={() => filterItems("Lager")}>
            <a href="#">Lager</a>
          </li>
          |
          <li onClick={() => filterItems("IPA", "India Pale Ale")}>
            <a href="#">IPA</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterOptions;
