import { useState } from "react";
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
          <div className="display">
            {props.attributeInfo.map((item) => (
              <img
                key={item.id}
                className="image"
                src={item.card_images[0].image_url}
                alt={item.name}
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
            ))}
          </div>
        )}
      </div>

      <div className="display">
        {deck.map((item) => (
          <img
            className="image"
            key={item.id}
            src={item.image_url}
            alt={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default CardSection;
