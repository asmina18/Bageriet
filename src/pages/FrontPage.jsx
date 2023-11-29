import { Neyheder } from "../components/Nyheder";
import { Nyhedsbrev } from "../components/Nyhedsbrev";
import { Slider } from "../components/Slider";

export function FrontPage() {
   return (

      <>
      <div>
         
         <Slider />
         <Neyheder/>
         <Nyhedsbrev/>
       
      </div>
      </>
      
   )
}
