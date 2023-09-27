import {useState} from 'react';
import './SearchBar.css'
function SearchBar({searchprop}){
    const [term, setTerm]=useState('');

    const handleFormSubmit=(event)=>{
        event.preventDefault();

        searchprop(term);
    }
    const handleInput=(event)=>{
        setTerm(event.target.value)
    }

    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label> Search Here</label>
                <input onChange={handleInput} placeholder='Search'/>
            </form>
        </div>);
}

export default SearchBar;