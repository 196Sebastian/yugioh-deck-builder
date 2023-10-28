import "../display/build.css";

const BuildSection = (props) => {
  return (
    <>
      <div className="display-deck">
        <h1>{props.name}</h1>
      </div>
    </>
  );
};

export default BuildSection;
