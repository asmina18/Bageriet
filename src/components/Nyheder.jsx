import style from '../Styles/nyheder.module.scss'
import img1 from "../assets/Billeder/images/article.jpg";
import img2 from "../assets/Billeder/images/article2.jpg";
import img3 from "../assets/Billeder/images/article3.jpg";


export const Neyheder = () => {

   return (
      <>

         <div className={style.divContainer}>
            <article>
               <h2>Vi skaber lækkert!Brød</h2>
               <p>Lotetur adipiriam ex aspernatur<br/> alias iusto quae hic a, repellat voluptas error incidunt necessitatibus blanditiis, aliquamuos velit maxime!
                  Lorem ectetur </p>
            </article>
         </div>
         <figure className={style.figureContainer}>

            <figcaption>
            <img src={img1} alt="articleImg" />
               <h4>KREATIVET DYRKES</h4>
               <p>Lorem ipsum dolor sit, amet consunt sit doloremque iure.</p>
            </figcaption>

            <figcaption>
            <img src={img2} alt="articleImg" />
               <h4>VI ELSKER BRØD</h4>
               <p>Lorem ipsum doLorem ipsum doloramet conselloremque iure.</p>
            </figcaption>

            <figcaption>
            <img src={img3} alt="articleImg" />
               <h4>SANS FOR DETALJE</h4>
               <p>Lorem ipsum dolor sit, amet consectiunt sit doloremque iure.</p>
            </figcaption>
         </figure>
      </>

   )

}
