import React from 'react';
import './Card.css';


{/* const data = [
    ["Element", "Density", { role: "style" }],
    ["Critical", 21, "red"], // RGB value
    ["High", 74, "orange"], // English color name
    ["Medium", 155, "yellow"],
     // CSS-style declaration
  ]; */}

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