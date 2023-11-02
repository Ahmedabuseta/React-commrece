import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:"cartSlice",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            console.log("added")
            let ids = state.map(item=>item.id)
            if (ids.includes(action.payload.id)){
                const index = state.findIndex(item=>item.id==action.payload.id)
                state[index].quantity++
                console.log(state[index].quantity); 
            }else{
                state.push({...action.payload,quantity:1})
            }
            // state.push({...action.payload,quantity:1})
        },
        pluseOne:(state,action)=>{
            const indexPluse = state.findIndex(item=>item.id==action.payload)
            state[indexPluse].quantity++
        },
        minuseOne:(state,action)=>{
            const indexMinuse = state.findIndex(item=>item.id==action.payload)
            state[indexMinuse].quantity--
        },
        removeFromCart:(state,action)=>{
           return state.filter(product=>product.id!==action.payload.id)
        },
        clear:(state,action)=>{
          return  state=[]
        }
    }
})

export const {addToCart , removeFromCart,pluseOne,minuseOne ,clear} = cartSlice.actions;
export default cartSlice.reducer;