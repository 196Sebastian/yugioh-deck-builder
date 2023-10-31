import { useState } from "react";
import "../card-section/card-section.css";

const CardSection = (props) => {
  const [deck, setDeck] = useState([]);
  const [extraDeck, setExtraDeck] = useState([]);

  const setExtraDeckFun = (item) => {
    setExtraDeck([
      ...extraDeck,
      {
        id: item.id,
        image_url: item.card_images[0].image_url,
      },
    ]);
  };

  const separateDeck = (item) => {
    if (item.frameType === "link") {
      setExtraDeckFun(item);
    } else if (item.frameType === "xyz") {
      setExtraDeckFun(item);
    } else if (item.frameType === "synchro") {
      setExtraDeckFun(item);
    } else if (item.frameType === "fusion") {
      setExtraDeckFun(item);
    } else if (item.frameType === "fusion_pendulum") {
      setExtraDeckFun(item);
    } else if (item.frameType === "synchro_pendulum") {
      setExtraDeckFun(item);
    } else if (item.frameType === "xyz_pendulum") {
      setExtraDeckFun(item);
    } else {
      setDeck([
        ...deck,
        {
          id: item.id,
          image_url: item.card_images[0].image_url,
        },
      ]);
    }
  };

  return (
    <>
      <div>
        {props.cardsArrayList.length === 0 ? (
          <div className="default-message">
            <h1>Please Select CARDS TO BUILD YOUR DECK...</h1>
          </div>
        ) : (
          <div className="display">
            {props.cardsArrayList.map((item) => (
              <img
                key={item.id}
                className="image"
                src={item.card_images[0].image_url}
                alt={item.name}
                onClick={() => {
                  separateDeck(item);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="display">
        <div>
          {deck.map((item, index) => (
            <img
              className="image"
              id={item.id}
              key={index}
              src={item.image_url}
              alt={item.name}
            />
          ))}
        </div>

        <div>
          {extraDeck.map((item, index) => (
            <img
              className="image"
              id={item.id}
              key={index}
              src={item.image_url}
              alt={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardSection;
