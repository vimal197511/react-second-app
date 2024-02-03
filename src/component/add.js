import { useState } from "react"
import Hoc from "./hoc"

 const Add=(props)=>{
    const [count,set] = useState(0)
    const add =()=>{
        set(count+1)
    }
    return(
        <div>
        <h1>add comp</h1>
        <h2>count ={props.hoccount}</h2>
        <button onClick={props.hocval}>Add value</button>

        
        </div>
    )
}

export default Hoc(Add)
