const SearchOptions = () => {
  const searchOptions = [
    {
      label: "Attribute",
      options: [
        { label: "Dark", value: 1 },
        { label: "Divine", value: 2 },
        { label: "Earth", value: 3 },
        { label: "Fire", value: 4 },
        { label: "Light", value: 5 },
        { label: "Water", value: 6 },
        { label: "Wind", value: 7 },
      ],
    },
    {
      label: "Type",
      options: [
        { label: "Trap Card", value: 8 },
        { label: "Spell Card", value: 9 },
      ],
    },
  ];
  return searchOptions;
};

export default SearchOptions;
