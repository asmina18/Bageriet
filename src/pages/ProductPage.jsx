import React, { useEffect, useState } from "react";
import { FaRegComments } from "react-icons/fa";
import style from "../Styles/ProductPage.module.scss";

export function ProductPage() {
  // State for at gemme produkterne
  const [products, setProducts] = useState([]);

  // useEffect bruges til at hente data fra API'en ved montage af komponenten
  useEffect(() => {
    const url = 'https://api.mediehuset.net/bakeonline/products';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Sorter data baseret på oprettelsestidspunkt og gem de første 8 elementer
        const sortedData = data.items?.sort((a, b) => b.created - a.created);
        setProducts(sortedData?.slice(0, 8));
      })
      .catch((error) => {
        console.error("Fejl under hentning af data:", error);
        // Håndter fejlen, f.eks. vis en fejlbesked eller udfør en anden handling
      });
  }, []); // Tøm arrayet for at køre useEffect kun én gang under montering

  return (
    <>
      {/* Sektion for introduktionstekst */}
      <div className={style.LoremText}>
        <h2>Nyeste bagværk</h2>
        <p>
          {/* Tekst til introduktionen */}
          Lorem debitis voluptate porro! Deserunt autem sequi ullam? Loreelit.
          Accusamus in fugit voluptatibus maxime enim ex cum, quibusdam impedit
          ut ipsum officia perspiciatis labore minus quasi exercitationem
          tenetur eaque recusandae provident.
        </p>
      </div>

      {/* Sektion for visning af produkter */}
      <div className={style.productContainer}>
        {/* Map gennem produkter og opret sektion for hvert produkt */}
        {products?.map((product) => (
          <section className={style.productSection} key={product.id}>
            {/* Container for hvert produkt */}
            <div className={style.productItem}>
              {/* Billede af produktet */}
              <img
                src={product.image.fullpath}
                alt="breadImage"
                className={style.productImage}
              />
              {/* Antal kommentarer og ikon */}
              <p className={style.commentCount}>{product.num_comments}</p>
              <FaRegComments className={style.commentIcon} />
              {/* Titel og teaser af produktet */}
              <h5 className={style.productTitle}>{product.title}</h5>
              <p className={style.productTeaser}>{product.teaser}</p>
            </div>

            {/* Container for 'Se mere' knap */}
            <div className={style.readMoreButton}>
              <button>Se mere</button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
