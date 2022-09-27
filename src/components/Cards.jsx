import React, { useEffect, useState } from 'react'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom';


function Cards() {

    const [card, setCard] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        fetchPokemon();
    },[]);


    const fetchPokemon = async () => {
        const api = await fetch(`https://api.pokemontcg.io/v2/cards/?q=set.id:base1&?orderBy=number&?page=1&pageSize=50&?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        setCard(data.data);
        setLoading(false);
    };


    if (isLoading) {
        return <div className="App">
            <div id="loading-box">
              <div className="pokeball-back"></div>
              <div className="pokeball-loading">
                <div className="pokeball" id="pokeball-normal"></div>
                <div className="pokeball" id="pokeball-great"></div>
                <div className="pokeball" id="pokeball-ultra"></div>
                <div className="pokeball" id="pokeball-master"></div>
                <div className="pokeball" id="pokeball-safari"></div>
              </div>
              <div className='loading-text'>Loading Cards</div>
            </div>
        </div>;
      }

  return (
    <div className='card-list page-con'>
        {card.map(pokemon => {
           return(
            <Link to={'/cardinfo/'+pokemon.id} key={pokemon.id}>
                <div  className="card" >
                    <Tilt options={{ max : 25 }} className={pokemon.rarity}>
                        <img src={pokemon.images.small} alt={pokemon.name}/>
                    </Tilt>
                </div>
            </Link>
            );
        })}
    </div>
  )
}

export default Cards