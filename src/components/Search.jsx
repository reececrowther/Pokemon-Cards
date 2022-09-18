import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandeler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    }; 

  return (
    <div className='search-con page-con'>
    <form onSubmit={submitHandeler}>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        <button type='submit'>Search</button>
    </form>
    </div>
  )
}

export default Search