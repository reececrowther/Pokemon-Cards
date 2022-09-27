import React, { useEffect, useState } from 'react'
import Tilt from 'react-tilt'
import { Link, useParams } from 'react-router-dom'

function Filtered() {
    const [cards, setCards] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let params = useParams();
    
    useEffect( () => {
        fetchSearched(params.filter);
        console.log("URL: " + params.filter);
    },[params.filter]);
    
    
    const fetchSearched = async (type) => {
        const api = await fetch(`https://api.pokemontcg.io/v2/cards?q=${type}&?orderBy=name&?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        console.log("filter data: " + data.data);
        setCards(data.data);
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
            {cards.map(pokemon => {
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

export default Filtered