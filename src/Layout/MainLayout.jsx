import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import style from "../Layout/mainLayout.module.scss"
import {  Footer} from "../components/Footer";
export function Layout() {
   

   return (
      <>
         <main className={style.mainLayout}>
            <Navbar />
            <Outlet />
            <Footer/>
         </main>

      </>

   )
}
