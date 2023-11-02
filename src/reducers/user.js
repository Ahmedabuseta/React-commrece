import { createSlice } from "@reduxjs/toolkit";
import { errorMsg } from "../component/toast";

localStorage.setItem('token',"ahmed@hmail.com")
export const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        online:false,
        isAdimn:false,
        users:[{email:"ahmed@hmail.com",Password:'1',firstName:'ahmed',lastName:'mohmed'}]
    },
    reducers:{
        login:(state,action)=>{
             state.online=true;
             state.isAdimn=true
        },
        logout:(state,action)=>{
             state.online = false;
        },
        modify:(state,action)=>{
            state.online=true;
            const updated =state.users.map(user=>{
                if(user.email == action.payload.email){
                    return action.payload
                }
                return user
            })
            state.users = [...updated]
            console.log(updated)
        },
        register:(state,action)=>{
            console.log(action.payload)
            state.online=true;
            state.users.push({ ...action.payload, id: state.users.length })
            window.localStorage.setItem("token",action.payload.email)
    }}
})

export const {login , logout ,register,modify} = userSlice.actions;
export default userSlice.reducer;