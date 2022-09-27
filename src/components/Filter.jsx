import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from "react-select";

function Filter() {

    const [type, settype] = useState([]);
    const [subType, setSubType] = useState([]);
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
            <button type='submit'>Filter</button>

            
        </form>
    </div>
  )
}

export default Filter