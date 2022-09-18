import React, { useEffect, useState } from 'react'
import Tilt from 'react-tilt'
import { useParams } from 'react-router-dom'

function Cardinfo() {

const [cardInfo, setCardInfo] = useState([]);
let params = useParams();


const fetchdetails = async () => {
    const data = await fetch(`https://api.pokemontcg.io/v2/cards/${params.card}?apiKey=${process.env.REACT_APP_API_KEY}`);
    const details = await data.json();
    setCardInfo(details.data);
};

useEffect(() => {
    fetchdetails();
},[]);

if (!cardInfo.id) return <p>Getting data.....</p>

  return (
    <div className='card-main-con page-con'>
        <div key={cardInfo.name} className="card info-card" >
            <Tilt options={{ max : 25 }} className={cardInfo.rarity}>
                <img src={cardInfo.images.large} alt={cardInfo.name}/>
            </Tilt>
        </div>
        <div className='name-con'>
        <div>
            <p>{cardInfo.types}</p>
        </div>
        <div>
            <h1>{cardInfo.name}</h1>
            <h3>{cardInfo.supertype} - {cardInfo.subtypes}</h3>
        </div>
            
        </div>
        
    </div>
  )
}

export default Cardinfo