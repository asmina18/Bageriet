import React, { useState } from 'react';

import style from '../Styles/nyhedsbrev.module.scss';
import { MdOutlineEmail } from 'react-icons/md';

export function Nyhedsbrev() {
   // State til at holde e-mail og e-mail valideringsstatus
   const [email, setEmail] = useState('');
   const [isEmailValid, setIsEmailValid] = useState(true);
 
   // Funktion til at håndtere formularindsendelse
   const handleSubmit = (event) => {
     // Forhindrer standardadfærd ved formularindsendelse (sidegenindlæsning)
     event.preventDefault();
 
     // Validering af e-mail ved at bruge HTML5 validering
     if (!event.target.checkValidity()) {
       // Hvis e-mailen ikke er gyldig, sættes valideringsstatus til falsk, og der vises en alert
       setIsEmailValid(false);
       alert('Skriv din gyldige e-mailadresse ❌');
     } else {
       // Hvis e-mailen er gyldig, sættes valideringsstatus til sand, og der vises en tak-alert
       setIsEmailValid(true);
       alert(`Tak for din tilmelding med ${email}`);
       // Nulstil e-mailfeltet
       setEmail('');
     }
   };
 
  
   return (
    <div>
      <form className={style.form} onSubmit={handleSubmit} noValidate>
        {/* E-mailindtastningsfelt med værdi styret af state og onchange-håndtering */}
        <MdOutlineEmail/>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {/* Knappen til at sende formularen */}
        <button type="submit">Tilmeld</button>
  
        {/* Viser fejlmeddelelse, hvis e-mailen ikke er gyldig */}
        {!isEmailValid && (
          <p style={{ color: 'red' }}>Venligst indtast en gyldig e-mailadresse. 😩</p>
        )}
      </form>
    </div>
 );
 };
