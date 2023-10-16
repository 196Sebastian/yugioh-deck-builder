import { useState } from "react";
import Select from "react-select/creatable";
import SearchOptions from "./searchInfo";

const CardSection = () => {
  const [attributeInfo, setAttribute] = useState([]);

  const getAttributeData = async (apiEndPoint) => {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?${apiEndPoint}`
    );
    const data = await response.json();
    setAttribute(data.data);
  };

  return (
    <div>
      <Select
        options={SearchOptions()}
        onChange={(apiEndPoint) => {
          getAttributeData(apiEndPoint.value);
        }}
      />
    </div>
  );
};

export default CardSection;
