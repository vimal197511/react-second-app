import { createSlice } from "@reduxjs/toolkit";

export const Userslice = createSlice({
    name:"User",
    initialState:{
        name:"vimal",
        age:"18"
    },
    reducers:{
        getname:(state,action)=>{
            console.log("getnameState",state)
            console.log("getnameaction",action)
        },
        addname:(state,action)=>{
            console.log("addnameState",state.name)
            console.log("addnameaction",action.payload)
            state.name = action.payload.name;
            state.age = action.payload.age;
        }
    }
})

export const {getname,addname} = Userslice.actions;

export default Userslice.reducer;