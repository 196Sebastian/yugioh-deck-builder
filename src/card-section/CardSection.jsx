import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../card-section/card-section.css";

const CardSection = (props) => {
  const [deck, setDeck] = useState([]);

  return (
    <>
      <div>
        {props.attributeInfo.length === 0 ? (
          <div className="default-message">
            <h1>Please Select CARDS TO BUILD YOUR DECK...</h1>
          </div>
        ) : (
          <div className="search-display">
            <ImageList sx={{ width: 480, height: 500 }} cols={5} gap={4}>
              {props.attributeInfo.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    srcSet={item.card_images[0].image_url}
                    src={item.card_images[0].image_url}
                    alt={item.name}
                    loading="lazy"
                    onClick={() => {
                      setDeck([
                        ...deck,
                        {
                          id: item.id,
                          image_url: item.card_images[0].image_url,
                        },
                      ]);
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        )}
      </div>

      <div>
        <ImageList sx={{ width: 480, height: 500 }} cols={5} gap={4}>
          {deck.map((item, id) => (
            <ImageListItem key={id}>
              <img
                srcSet={item.image_url}
                src={item.image_url}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default CardSection;
