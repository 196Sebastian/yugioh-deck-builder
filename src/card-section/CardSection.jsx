import Select from "react-select/creatable";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const CardSection = () => {
  return (
    <>
      {/* 
      {attributeInfo.length === 0 ? (
        <div className="default-message">
          <h1>Please Select CARDS TO BUILD YOUR DECK...</h1>
        </div>
      ) : (
        <div className="search-display">
          <ImageList sx={{ width: 550, height: 520 }} cols={5} gap={4}>
            {attributeInfo.map((item) => (
              <ImageListItem key={item.id} sx={{ width: 90 }}>
                <img
                  srcSet={item.card_images[0].image_url}
                  src={item.card_images[0].image_url}
                  alt={item.name}
                  loading="lazy"
                  onClick={() => {}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )} */}
    </>
  );
};

export default CardSection;
