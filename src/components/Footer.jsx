
import style from '../Styles/footer.module.scss'

export function Footer() {
  return (
    <footer className={style.footerCantainer}>
      <h5>bageriet</h5>
      <p>
        Der er mange tilgøngelige udgaver af Lorem Ipsum,men de flreste udgaver har <br/>gennemgået forandringer
      </p>
      <section>
        <p>Copyright © 2017 i bageriet aps</p>
      </section>
    </footer>
  );
}
