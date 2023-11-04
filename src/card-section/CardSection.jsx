import { useState, useEffect, useRef } from "react";
import Select from "react-select/creatable";
import "../card-section/card-section.css";

const CardSection = (props) => {
  const [deck, setDeck] = useState([]);
  const [extraDeck, setExtraDeck] = useState([]);
  const [customDeck, setCustomDeck] = useState([]);
  const [deckName, setDeckName] = useState("");

  // const [listOfKeys, setListOfKeys] = useState([]);
  // const getOption = () => {
  //   Object.keys(localStorage).map((item) => {
  //     <option>{item}</option>;
  //   });
  // };

  const nameChange = (e) => {
    setDeckName(e.target.value);
  };

  const together = () => {
    setCustomDeck(deck.concat(extraDeck));
  };

  const onButtonSave = () => {
    const jsonArray = JSON.stringify(customDeck);
    localStorage.setItem(`${deckName}`, jsonArray);
    const str = localStorage.getItem(`${deckName}`);
    JSON.parse(str);
  };

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
      <div className="display">
        {props.cardsArrayList.length === 0 ? (
          <div>
            <h1>Please Select CARDS TO BUILD YOUR DECK...</h1>
          </div>
        ) : (
          <div>
            {props.cardsArrayList.map((item) => (
              <img
                key={item.id}
                className="image"
                src={item.card_images[0].image_url}
                alt={item.name}
                onClick={() => {
                  together();
                  separateDeck(item);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="main-deck">
          <div className="save-info">
            <input
              placeholder="Deck Name"
              value={deckName}
              onChange={nameChange}
            />

            {/* FIND A WAY TO USE THE KEYS TO BE ABLE TO CLICK ON THE SAVED DECKS */}
            <select></select>

            <button
              className="save-button"
              onClick={() => {
                onButtonSave();
              }}
            >
              save
            </button>
          </div>
          {deck
            .sort((a, b) => a.id - b.id)
            .map((item, index) => (
              <img
                className="image"
                id={item.id}
                key={index}
                src={item.image_url}
                alt={item.name}
              />
            ))}
        </div>

        <div className="extra-deck">
          <div>
            {extraDeck
              .sort((a, b) => a.id - b.id)
              .map((item, index) => (
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
      </div>
    </>
  );
};

export default CardSection;
