import { useState } from "react";
import Select from "react-select/creatable";
import SearchOptions from "./searchInfo";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./card-section-style.css";

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
          <div>{console.log(attributeInfo[0].card_images[0].image_url)}</div>
          <ImageList
            sx={{
              width: 580,
              height: 500,
            }}
            gap={30}
          >
            {attributeInfo.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  srcSet={item.card_images[0].image_url}
                  src={item.card_images[0].image_url}
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.name}
                  subtitle={<span>by: {item.name}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </>
      ) : null}
    </div>
  );
};

export default CardSection;
