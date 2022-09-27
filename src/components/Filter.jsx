import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from "react-select";

function Filter() {

    const [type, settype] = useState([]);
    const [subType, setSubType] = useState([]);
    const [set, setSet] = useState([]);
    const navigate = useNavigate();

    const submitHandeler = (e) => {
      let url = [];
        e.preventDefault();

//types
      if (type.length > 1 ){
        let typeUrl = [];
          type.forEach(element => {
            typeUrl.push(element.value);
      });

        let newTypeUrl = typeUrl.join("&types:");
        url.push("types:"+newTypeUrl);
        
      } else if(type.length === 1){
        url.push("types:"+type[0].value);
      }

//subTypes
      if (subType.length > 1 ){
        let subTypeUrl = [];
        subType.forEach(element => {
          subTypeUrl.push(element.value);
      });

      let newUrl = subTypeUrl.join("&subtypes:");
      url.push("subtypes:"+newUrl);


      } else if(subType.length === 1){
        url.push("subtypes:"+subType[0].value);
      }
      
//Sets
      if (set.length > 1 ){
        let setUrl = [];
        set.forEach(element => {
          setUrl.push(element.value);
      });

      let newSetUrl = setUrl.join("&set.id:");
      url.push("set.id:"+newSetUrl);


      } else if(set.length === 1){
        url.push("set.id:"+set[0].value);
      }

      let finalURL = url.join(" ");
      navigate('/filtered/'+finalURL);  
      }; 



    // Array of types options
  const optionList = [
    { value: "Colorless", label: "Colorless" },
    { value: "Darkness", label: "Darkness" },
    { value: "Dragon", label: "Dragon" },
    { value: "Fairy", label: "Fairy" },
    { value: "Fighting", label: "Fighting" },
    { value: "Fire", label: "Fire" },
    { value: "Grass", label: "Grass" },
    { value: "Lightning", label: "Lightning" },
    { value: "Metal", label: "Metal" },
    { value: "Psychic", label: "Psychic" },
    { value: "Water", label: "Water" }
  ];

  // Function triggered on selection
  function handleSelect(typeData) {
    settype(typeData);
  }

   // Array of types options
   const optionListSubType = [
    { value: "BREAK", label: "BREAK" },
    { value: "Baby", label: "Baby" },
    { value: "Basic", label: "Basic" },
    { value: "EX", label: "EX" },
    { value: "GX", label: "GX" },
    { value: "Goldenrod Game Corner", label: "Goldenrod Game Corner" },
    { value: "Item", label: "Item" },
    { value: "LEGEND", label: "LEGEND" },
    { value: "Level-Up", label: "Level-Up" },
    { value: "MEGA", label: "MEGA" },
    { value: "Pokémon Tool", label: "Pokémon Tool" },
    { value: "Pokémon Tool F", label: "Pokémon Tool F" },
    { value: "Rapid Strike", label: "Rapid Strike" },
    { value: "Restored", label: "Restored" },
    { value: "Rocket's Secret Machine", label: "Single Strike" },
    { value: "Special", label: "Special" },
    { value: "Stadium", label: "Stadium" },
    { value: "Stage 1", label: "Stage 1" },
    { value: "Stage 2", label: "Stage 2" },
    { value: "Supporter", label: "Supporter" },
    { value: "TAG TEAM", label: "TAG TEAM" },
    { value: "Technical Machine", label: "Technical Machine" },
    { value: "V", label: "V" },
    { value: "VMAX", label: "VMAX" }
  ];

  // Function triggered on selection
  function handleSubType(subTypeData) {
    setSubType(subTypeData);
  }


     // Array of types options
     const optionListSets = [
      { value: "xy7", label: "Ancient Origins" },
      { value: "ecard2", label: "Aquapolis" },
      { value: "pl4", label: "Arceus" },
      { value: "swsh10", label: "Astral Radiance" },
      { value: "swsh10tg", label: "Astral Radiance Trainer Gallery" },
      { value: "xy9", label: "BREAKpoint" },
      { value: "xy8", label: "BREAKthrough" },
      { value: "bwp", label: "BW Black Star Promos" },
      { value: "base1", label: "Base" },
      { value: "base4", label: "Base Set 2" },
      { value: "swsh5", label: "Battle Styles" },
      { value: "bp", label: "Best of Game" },
      { value: "bw1", label: "Black & White" },
      { value: "bw7", label: "Boundaries Crossed" },
      { value: "swsh9", label: "Brilliant Stars" },
      { value: "swsh9tg", label: "Brilliant Stars Trainer Gallery" },
      { value: "sm3", label: "Burning Shadows" },
      { value: "col1", label: "Call of Legends" },
      { value: "cel25", label: "Celebrations" },
      { value: "cel25c", label: "Celebrations: Classic Collection" },
      { value: "sm7", label: "Celestial Storm" },
      { value: "swsh35", label: "Champion's Path" },
      { value: "swsh6", label: "Chilling Reign" },
      { value: "sm12", label: "Cosmic Eclipse" }
      //NEEDS THE REST
    ];
  
    // Function triggered on selection
    function handleSets(setData) {
      setSet(setData);
    }

  return (
    <div className='filter-con page-con'>
        <form onSubmit={submitHandeler}>
            <label >Type/s:</label>
            <Select
                options={optionList}
                placeholder="Select type/s"
                value={type}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
            />
            <Select
                options={optionListSubType}
                placeholder="Select Subtype/s"
                value={subType}
                onChange={handleSubType}
                isSearchable={true}
                isMulti
            />
            <Select
                options={optionListSets}
                placeholder="Select Set"
                value={set}
                onChange={handleSets}
                isSearchable={true}
                isMulti
            />
            <button type='submit'>Filter</button>

            
        </form>
    </div>
  )
}

export default Filter