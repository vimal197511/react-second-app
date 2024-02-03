import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import './main.css'

function Main(){

    let fall = useNavigate()

    const elem=(page)=>{
        fall(page)
    }

   
    
    return(
        <div>
            <header className="head">W3School page</header>
            <ul className="contain">
           <li className="outtag"> <a href="" className="intag"  onClick={()=>elem('pageone')}>HTML</a></li>
          <li className="outtag"> <a href="" className="intag" onClick={()=>elem('pagetwo')}>CSS</a></li> 
            <li className="outtag"> <a href="" className="intag" onClick={()=>elem('pagethree')}>JAVASCRIPT</a></li>
            <li className="outtag"><a href="" className="intag" onClick={()=>elem('pagefour')}>SQL</a></li>
            </ul>



            
        </div>
    )
}

export default Main