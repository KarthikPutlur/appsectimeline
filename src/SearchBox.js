import React from 'react';
import './Search.css';


const SearchBox = () => {

        return (
            <div className='search pa2'>
                <input className='pa3 ba b--blue bg-near-black white'
                type = 'search' 
                placeholder='search apps..' 
                />
            </div>
        );
}

export default SearchBox;