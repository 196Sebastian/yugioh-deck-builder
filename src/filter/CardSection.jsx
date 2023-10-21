import { useState } from "react";
import Select from "react-select/creatable";
import SearchOptions from "../data/searchInfo";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const CardSection = () => {
  const [attributeInfo, setAttribute] = useState([]);

  const getAttributeData = async (apiEndPoint) => {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?${apiEndPoint}`
    );
    const data = await response.json();
    setAttribute(data.data);
    console.log(data.data);
  };

  return (
    <div>
      <Select
        options={SearchOptions()}
        onChange={(apiEndPoint) => {
          getAttributeData(apiEndPoint.value);
        }}
      />

      {attributeInfo.length !== 0 ? (
        <>
          <div className="card-list-section">
            <ImageList sx={{ width: 626, height: 530 }} cols={5} gap={4}>
              {attributeInfo.map((item) => (
                <ImageListItem key={item.id} sx={{ width: 110 }}>
                  <img
                    srcSet={item.card_images[0].image_url}
                    src={item.card_images[0].image_url}
                    alt={item.name}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CardSection;
