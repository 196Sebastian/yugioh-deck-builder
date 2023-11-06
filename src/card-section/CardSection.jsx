import { useState, useEffect, useRef } from "react";
import Select from "react-select/creatable";
import "../card-section/card-section.css";

const CardSection = (props) => {
  const [deck, setDeck] = useState([]);
  const [extraDeck, setExtraDeck] = useState([]);
  const [customDeck, setCustomDeck] = useState([]);
  const [deckName, setDeckName] = useState("");
  const [deckData, setDeckData] = useState([]);

  const currentData = JSON.parse(localStorage.getItem("save-deck")) || [];

  const info = {
    id: Date.now(),
    deckName: deckName,
    deck: customDeck,
  };

  const nameChange = (e) => {
    setDeckName(e.target.value);
  };

  const getDeckNameData = () => {
    setDeckData(currentData);
  };

  const onButtonSave = () => {
    const newObject = info;
    currentData.push(newObject);
    localStorage.setItem("save-deck", JSON.stringify(currentData));
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

  const addToCustomDeck = (item) => {
    customDeck.push(item);
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
                  separateDeck(item);
                  addToCustomDeck(item);
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

            <select onClick={getDeckNameData}>
              <option>Saved Decks</option>
              {deckData.map((item) => (
                <option key={item.id} onClick={() => {}}>
                  {item.deckName}
                </option>
              ))}
            </select>

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
