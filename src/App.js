import CardSection from "./card-section/CardSection";
import HeaderSection from "./header/Header";
import FilterSection from "./fliter/FilterSection";
import "./header/header-styles.css";
import "./general.css";

function App() {
  return (
    <>
      <div className="App">
        <HeaderSection />
        <div className="card-section">
          <FilterSection />
          <CardSection />
        </div>
      </div>
    </>
  );
}

export default App;
