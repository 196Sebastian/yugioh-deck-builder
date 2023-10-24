const SearchOptions = () => {
  const searchOptions = [
    {
      label: "Staple",
      options: [
        {label: "Staples", value: "staple=yes"}
      ]
    },
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
    {
      label: "Type",
      options: [
        { label: "Effect Moster", value: "type=Effect Monster" },
        { label: "Trap Card", value: "type=Trap card" },
        { label: "Spell Card", value: "type=Spell card" },
      ],
    },
  ];
  return searchOptions;
};

export default SearchOptions;
