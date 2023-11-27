import { Outlet } from "react-router-dom";
import {Navbar  } from "../components/Navbar";
import style from "../Styles/layout.module.scss"

export function Layout(){

   return(
<>
<Navbar/>
      <main className={style.mainLayout}>
         <Outlet/>

      </main>

</>
      
   )
}
