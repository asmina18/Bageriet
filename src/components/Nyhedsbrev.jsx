import React, { useState } from 'react';
import image from '../assets/Billeder/newBrev.jpg'
import style from '../Styles/nyhedsbrev.module.scss';
import { MdOutlineEmail } from 'react-icons/md';

export function Nyhedsbrev() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <>
 
      <div className={style.divContainer}>

        <img src={image} alt="NyhedsImage" />
        <h2>Tilmeld dig vores nyhedsbrev</h2>
        <p>Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver</p>
      <form onSubmit={handleSubmit}>
        <MdOutlineEmail />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Indtast din email...."
            />
        </label>
        <br />
        <button type="submit">Tilmeld</button>
      </form>
        </div>
            
        
      
    </>
  );
}
