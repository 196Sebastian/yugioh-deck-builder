import CardSection from "./CardSection";
import HeaderSection from "./Header";
import { useState, useEffect } from "react";
import "./header-styles.css";
import "./card-section-style.css";

function App() {
  const apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  const [card, setData] = useState([]);

  useEffect(() => {
    async function cardData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data.data);
      console.log(data);
    }
  }, []);

  return (
    <>
      <div className="App">
        <HeaderSection />
        <div className="card-section">
          <CardSection />
        </div>
      </div>
    </>
  );
}

export default App;
