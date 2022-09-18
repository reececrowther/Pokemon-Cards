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
        const api = await fetch(`https://api.pokemontcg.io/v2/cards/?q=set.id:base1&?orderBy=number&?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        setCard(data.data);
        setLoading(false);
    };


    if (isLoading) {
        return <div className="App">Loading...</div>;
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