import HeaderSection from "./header/Header";
import FilterSection from "./fliter/FilterSection";
import "./header/header-styles.css";
import "./general.css";
import BuildSection from "./display/BuildSection";

function App() {
  return (
    <>
      <div className="App">
        <HeaderSection />
        <div className="display-section">
          <FilterSection />
        </div>
      </div>
    </>
  );
}

export default App;
