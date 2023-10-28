const SearchOptions = () => {
  const searchOptions = [
    {
      label: "Attribute",
      options: [
        { label: "Dark", value: "attribute=Dark" },
        { label: "Divine", value: "attribute=Divine" },
        { label: "Earth", value: "attribute=Earth" },
        { label: "Fire", value: "attribute=Fire" },
        { label: "Light", value: "attribute=Light" },
        { label: "Water", value: "attribute=Water" },
        { label: "Wind", value: "attribute=Wind" },
      ],
    },
  ];
  return searchOptions;
};

export default SearchOptions;
