import { Children, createContext, useState } from "react";

export const Creater = createContext();

const Usercontextprovider=(props)=>{
    const [name,set]  = useState("vimal")

    const changename=()=>{
        set('kumar')
    }
    return(
        <Creater.Provider value={{username:name,changename:changename}}>{props.children}</Creater.Provider>
    )
}
 
export default Usercontextprovider