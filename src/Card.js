import React from 'react';
import './Card.css';



const Card = ({name, email, id}) => {
    return (
            <div className='tc '>
                <div>
                    <h2 class="f2 lh-solid" >{name}</h2>
                    {/* <p>{email}</p> */}
                </div>
            </div>
    );
}

export default Card;