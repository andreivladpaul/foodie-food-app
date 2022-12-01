import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.scss';
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/searched/'+input);
    }

  return (
    <>
        <Link to={'/'} className='anchor-style logo'>
            Foodie
        </Link>
        <form className='form' onSubmit={handleSubmit}> 
            <span className="material-symbols-outlined">
                search
            </span>
            <input className='search__form'
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Search"
                />
        </form>
    </>
  )
}

export default Search
