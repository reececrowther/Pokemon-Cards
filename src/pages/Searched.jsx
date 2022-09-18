import React, { useEffect, useState } from 'react'
import Tilt from 'react-tilt'
import { Link, useParams } from 'react-router-dom'



function Searched() {
    const [cards, setCards] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let params = useParams();
    
    useEffect( () => {
        fetchSearched(params.search);
    },[params.search]);
    
    
    const fetchSearched = async (name) => {
        const api = await fetch(`https://api.pokemontcg.io/v2/cards/?q=name:${name}*&?orderBy=number&?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        console.log(data);
        setCards(data.data);
        setLoading(false);
    };

    if (isLoading) {
        return <div className="App">Loading...</div>;
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

export default Searched