const { createSlice } = require("@reduxjs/toolkit");


const CartSlice = createSlice({
    name:'cart',
    initialState:{
        data:[]
    },
    reducers:{
        addToCart(state , action){
            state.data = [...state.data , action.payload]
        }
        ,
        removeFromCart(state , action){
            state.data = state.data.filter((item)=> item.id !== action.payload)
        },
        empty(state){
            state.data = []
        }
    }
})

export const {addToCart , removeFromCart ,empty} = CartSlice.actions;
export default CartSlice.reducer