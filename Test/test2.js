// Importér nødvendige moduler fra React og styling-filen
import React, { useState, useEffect } from 'react';
import style from '../Styles/nyheder.module.scss';

// Definér en funktionel komponent i React kaldet Nyheder
export function Nyheder() {
   // Definér URL'en for nyheds-API'en
   const url = "https://api.mediehuset.net/bakeonline/news";

   // Initialisér tilstandsvariabler for nyhedsdata og fejlhåndtering
   const [data, setData] = useState([]);
   const [error, setError] = useState(null);

   // Brug useEffect til at hente og sortere nyhedsdata, når komponenten indlæses
   useEffect(() => {
      // Definér en funktion til at hente data asynkront
      const fetchData = async () => {
         try {
            // Hent data fra API'en og håndter responsen
            const res = await fetch(url);

            // Kast en fejl, hvis responsen ikke er ok 
            if (!res.ok) {
               throw new Error(`Fejl  ${res.status}`);
            }

            // Konverter responsen til JSON-format
            const result = await res.json();

            // Sortér nyhedselementerne efter oprettelsestidspunkt i faldende rækkefølge
            const sortedData = result?.items?.sort((a, b) => b.created - a.created);

            // Opdater tilstanden med kun de første 3 nyhedselementer fra den sorterede liste
            setData(sortedData?.slice(0, 3));
         } catch (error) {
            // Håndter fejl og log dem
            console.error('Fejl ved hentning af data:', error);
            setError('Fejl ved hentning af data');
         }
      };

      // Kald fetchData-funktionen når komponenten indlæses
      fetchData();
   }, []);

   // Opret selvstændige variabler for sortedData og latestArticles
   const sortedData = data?.sort((a, b) => b.created - a.created);
   const latestArticles = sortedData?.slice(0, 3);

   // Log den nuværende tilstand af data til konsollen
   console.log(data);

   // Rendér komponentens JSX
   return (
      <>
         <div>
            <h2>Vi elsker lækkert brød!</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis
               quae in omnis quisquam enim! Odit minus rerum molestias corporis
               consequuntur ipsam, iure doloremque voluptatem, vel, mollitia
               repudiandae nesciunt id!
            </p>
         </div>

         {/* Container til nyhedsartikler */}
         <div className={style.divContainer}>
            {/* Gennemløb nyhedsdata og vis hvert element som en artikel */}
            {latestArticles?.map((item) => {

               // console.log('Mapping over articles:', item);
               // console.log('Image:', item.image);
               // console.log('Title:', item.title);
               // console.log('Teaser:', item.teaser);
               
               return (
                  <article key={item.id}>
                     <figure>
                        {/* Vis billedet for hvert nyhedselement */}
                        <img src={item.image} alt="image" />
                     </figure>
                     {/* Vis titlen og teaseren for hvert nyhedselement */}
                     <h2>{item.title}</h2>
                     <p>{item.teaser}</p>
                  </article>
               );
            })}
         </div>
      </>
   );
}
