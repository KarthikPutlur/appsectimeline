import React from 'react';
import CardList from './CardList.js';

import {robots} from './robots.js';
import './App.css';
import MoveStuffAround from './MoveStuffAround.js';





const App = () => {
    return (
        <div >
            <div className='tc pa2 bg1'>
                <h1 className='f-subheadline lh-title bg   b--white white  "Lucida Grande", sans-serif '>EDG Application Security Dashboard</h1>
                <CardList robots={robots}/>
            </div> 
            <div className='b--black'>  
           <MoveStuffAround /> 
           </div>
        </div>
        
    
    );
}

export default App;