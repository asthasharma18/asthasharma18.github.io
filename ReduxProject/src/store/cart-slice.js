import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        items: [],
        totalQuantity: 0,
        changed: false    //dispatch store update only if data is changed, when it only fetched by replace cart, do not dispatch
    },
    reducers: {
        replaceCart(state, action) {
          state.totalQuantity = action.payload.totalQuantity;
          state.items = action.payload.items;
        },
        addItemToCart(state, action){
          const itemAdded = action.payload;
          const existingItem = state.items.find((item) => item.title === itemAdded.title);
          state.totalQuantity++;
          state.changed = true;
          if(existingItem){
            existingItem.quantity++;
            existingItem.totalPrice += itemAdded.price;
          } else{
            state.items.push({
                title: itemAdded.title,
                price: itemAdded.price,
                quantity:1,
                totalPrice: itemAdded.price
            })
          }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true; 
            if(existingItem.quantity===1){
               state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice= existingItem.totalPrice - existingItem.price;
            }

        }
    }
});
 
  
export const cartActions = cartSlice.actions;
export default cartSlice;