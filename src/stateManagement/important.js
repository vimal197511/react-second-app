import Usercontextprovider from "../context/user"
import { StateManagement } from "./newIndex"
import { Provider } from "react-redux"
import { Userstore, userstore } from "./redux/userstore"
import { Userslice } from "./redux/userslice"

function Impo(){
    return(
        <div>
            <Usercontextprovider>           
            <Provider store={Userstore}>
            <StateManagement/>
            </Provider>
      </Usercontextprovider>
            

        </div>
    )
}

export default Impo