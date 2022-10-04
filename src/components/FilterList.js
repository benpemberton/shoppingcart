import { useState } from "react";
import FilterOption from "./FilterOption";
import styled from "styled-components";

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
    <ListWrap>
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
    </ListWrap>
  );
};

const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;

  ul {
    list-style: none;
    font-size: 1.2rem;
  }
`;

export default FilterList;
