import {createSlice} from "@reduxjs/toolkit";
import itemsJSON from "../../products.json";

const data = itemsJSON.products;

export const itemsSlice = createSlice({
    name:'products',
    initialState:{
        onsale:data,
        total:0,
    },
    reducers:{
        sell: (state, action) => {
            const bulunan = state.onsale.find(item => action.payload === item.id);
            bulunan.count -= 1;
            state.total -= Number(bulunan.productPrice);
        },
        buy: (state,action)=>{
            const buldum = state.onsale.find(item => action.payload === item.id);
           const baslangic = Number(buldum.count);
           buldum.count = baslangic+1;
           state.total += Number(buldum.productPrice);
        },
        change: (state,action) => {
           const work = state.onsale.find(item => action.payload.giden === item.id);
           const ilk = work.count;
           console.log(state.total);
           if(action.payload.deger - ilk > Math.floor(100000000000 - state.total)/work.productPrice){
            Math.floor((100000000000 - state.total)/work.productPrice) === 0 ? work.count = ilk : work.count = Math.floor((100000000000 - state.total)/work.productPrice);
           }
           else{
            work.count = action.payload.deger;
            }
           state.total += (work.count - ilk) * work.productPrice;
        }
    },
})

export const {buy,sell,change} = itemsSlice.actions;
export default itemsSlice.reducer;