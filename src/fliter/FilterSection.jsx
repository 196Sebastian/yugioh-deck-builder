import Select from "react-select/creatable";
import TypeInfo from "../data/typeInfo";
import LevelInfo from "../data/levelInfo";
import { useState } from "react";
import CardSection from "../card-section/CardSection";
import "../fliter/filter.css";
import AttributeInfo from "../data/attributeInfo";

const FilterSection = () => {
  const [cardsArrayList, setCardsArrayList] = useState([]);
  const [type, setType] = useState();
  const [attribute, setNewAttribute] = useState();
  const [level, setLevel] = useState();

  const getAttributeData = async (type, attribute, level) => {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?${type}&${attribute}&${level}`
    );
    const data = await response.json();
    setCardsArrayList(data.data);
  };

  return (
    <>
      <div className="main">
        <div className="title">
          <h1>FILTERS</h1>
        </div>

        <div className="filter">
          <Select
            isSearchable={false}
            options={TypeInfo()}
            onChange={(type) => {
              setType(type.value);
            }}
          />
        </div>

        <div className="filter">
          <Select
            isSearchable={false}
            options={AttributeInfo()}
            onChange={(attribute) => {
              setNewAttribute(attribute.value);
            }}
          />
        </div>

        <div className="filter">
          <Select
            isSearchable={false}
            options={LevelInfo()}
            onChange={(level) => {
              setLevel(level.value);
            }}
          />
        </div>

        <button
          className="search-button"
          onClick={() => {
            getAttributeData(type, attribute, level);
          }}
        >
          search
        </button>
      </div>

      <CardSection cardsArrayList={cardsArrayList} />
    </>
  );
};

export default FilterSection;
