import HeaderSection from "./header/Header";
import FilterSection from "./fliter/FilterSection";
import BottomHeader from "./botton-header/BottomHeader";
import "./header/header-styles.css";
import "./general.css";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <HeaderSection />
        </div>

        <div className="display-section">
          <FilterSection />
        </div>

        <div>
          <BottomHeader />
        </div>
      </div>
    </>
  );
}

export default App;
