import { useState } from "react"
import Hoc from "./hoc"

const Hove=(props)=>{
 
     const [count,set] = useState(0)

     const hovervalue=()=>{
        set(count+1)
     }
    return(
        <div>
            <h1>hover comp</h1>
            <h2>count={props.hoccount}</h2>
            <button onMouseMove={props.hocval}>Hover value</button>
        </div>
    )
}

export default Hoc(Hove)
