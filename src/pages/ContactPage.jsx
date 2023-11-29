import React from 'react';

export function ContactPage() {
  return (
    <>

      <div>
        <h1>Kontakt os</h1>
        <form>
          <label>
            Dit navn...
            <input type="text" />
          </label>
          <label>
            Din e-mail...
            <input type="text" />
          </label>
          <label>
            Din besked...
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <button>Send</button>
        </form>
      </div>
      <div>
        <ul>
          <li>address: Øster uttrupvej 1 9200 Aalborg </li>
          <li>telefon:+45 25 25 95 40</li>
        </ul>
      </div>


        </>
        );
}
