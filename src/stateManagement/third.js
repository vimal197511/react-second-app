import { useContext } from "react"
import { Creater } from "../context/user"

import { useDispatch, useSelector } from "react-redux"
import { addname } from "./redux/userslice";

export const Third=(props)=>{
    // const context = useContext(Creater)
    // console.log("context",context)
    let dispatch = useDispatch();

    const data = useSelector((res)=>res)
    console.log(data)

    const handle=()=>{
        dispatch(addname({name:"kumar",age:'20'}))
    }
    return(
        <>
        <h1>this is third page 
         myname:   {data.name} <br></br>
         myage:{data.age}
         </h1>
        <button onClick={handle}>addname</button>

        {/* <button onClick={context.changename}>changename</button> */}
        </>
    )
}