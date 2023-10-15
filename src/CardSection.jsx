import { useState, useEffect, lazy } from "react";
import Select from "react-select/creatable";

const CardSection = () => {
  const attribute = [
    { label: "Dark", value: 1 },
    { label: "Divine", value: 2 },
    { label: "Earth", value: 3 },
    { label: "Fire", value: 4 },
    { label: "Light", value: 5 },
    { label: "Water", value: 6 },
    { label: "Wind", value: 7 },
  ];

  const customFilter = (option, searchText) => {
    return option.label.toLowerCase().startsWith(searchText);
  };

  const [attributeInfo, setAttribute] = useState([]);

  const getAttributeData = async (label) => {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=${label}`
    );
    const data = await response.json();
    setAttribute(data.data);
  };

  return (
    <div>
      <Select
        options={attribute}
        filterOption={customFilter}
        onChange={(customFilter) => {
          getAttributeData(customFilter.label);
        }}
      />
    </div>
  );
};

export default CardSection;
