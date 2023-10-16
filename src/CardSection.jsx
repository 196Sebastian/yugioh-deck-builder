import { useState } from "react";
import Select from "react-select/creatable";
import SearchOptions from "./searchInfo";

const CardSection = () => {
  // const customFilter = (option, searchText) => {
  //   return (
  //     option.label.toLowerCase().startsWith(searchText) && option.text.toLowerCase().startsWith(searchText)
  //   )
  // };

  const [attributeInfo, setAttribute] = useState([]);

  const getAttributeData = async (label) => {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=${label}`
    );
    const data = await response.json();
    setAttribute(data.data);
    console.log(data.data);
  };

  return (
    <div>
      <Select
        options={SearchOptions()}
        // filterOption={customFilter}
        onChange={(e) => {
          getAttributeData(e.label);
          console.log(e.label);
        }}
      />
    </div>
  );
};

export default CardSection;
