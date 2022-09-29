import { useState } from "react";
import FilterOption from "./FilterOption";

const FilterList = ({ items, setDisplayItems }) => {
  const [currentFilter, setCurrentFilter] = useState("Show all");

  const filterItems = (...args) => {
    setCurrentFilter(args[0]);

    if (
      args.some((argument) => {
        return argument === "Show all";
      })
    ) {
      setDisplayItems(items);
      return;
    }

    const filteredArray = items.filter((item) => {
      const tag = args.some((argument) => {
        return item.tagline.includes(argument);
      });
      const name = args.some((argument) => {
        return item.name.includes(argument);
      });
      return tag || name;
    });

    setDisplayItems(filteredArray);
  };

  return (
    <div className="filter-wrap">
      <div className="filter">
        <ul>
          <FilterOption
            text={"Show all"}
            filter={["Show all"]}
            filterItems={filterItems}
            currentFilter={currentFilter}
          />
          |
          <FilterOption
            text={"Ale"}
            filter={["Ale"]}
            filterItems={filterItems}
            currentFilter={currentFilter}
          />
          |
          <FilterOption
            text={"Lager"}
            filter={["Lager"]}
            filterItems={filterItems}
            currentFilter={currentFilter}
          />
          |
          <FilterOption
            text={"IPA"}
            filter={["IPA", "India Pale Ale"]}
            filterItems={filterItems}
            currentFilter={currentFilter}
          />
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
