import { useState } from "react";
import Select from "react-select/creatable";
import SearchOptions from "./searchInfo";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { sizing } from "@mui/system";
import "./test.css";
import { Box } from "@mui/material";

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
            <ImageList sx={{ width: 626, height: 530 }} cols={5} gap={12}>
              {attributeInfo.map((item) => (
                <ImageListItem key={item.id} sx={{ width: 115 }}>
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
