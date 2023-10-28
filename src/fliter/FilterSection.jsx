import Select from "react-select/creatable";
import TypeInfo from "../data/typeInfo";
import SearchOptions from "../data/searchInfo";
import { useState } from "react";
import CardSection from "../card-section/CardSection";
import "../fliter/filter.css";

const FilterSection = () => {
  const [attributeInfo, setAttribute] = useState([]);

  const getAttributeData = async (apiEndPoint) => {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?${apiEndPoint}`
    );
    const data = await response.json();
    setAttribute(data.data);
  };

  return (
    <>
      <div>
        <Select
          isSearchable={false}
          options={TypeInfo()}
          onChange={(apiEndPoint) => {
            getAttributeData(apiEndPoint.value);
          }}
        />

        <Select
          isSearchable={false}
          options={SearchOptions()}
          onChange={(apiEndPoint) => {
            getAttributeData(apiEndPoint.value);
          }}
        />
      </div>

      <CardSection attributeInfo={attributeInfo} />
    </>
  );
};

export default FilterSection;
