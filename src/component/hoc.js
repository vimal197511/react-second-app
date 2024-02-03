import { useState } from "react"

const Hoc=(Original)=>{
    // console.log("original",Original)

const Newcomp=()=>{
const [count,set] = useState(0)
const value=()=>{
    set(count+1)
}
return <Original hoccount={count} hocval={value}/>
}
return Newcomp
}

export default Hoc