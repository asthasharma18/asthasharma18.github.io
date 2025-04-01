import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetails= createContext();

//custom hook to check whether we are in provider
export function useOrderDetails(){
    const contextValue = useContext(OrderDetails);
if(!contextValue){
    throw new Error('use order details must be called from within an OrderDetailsProvider');
}
return contextValue;
}
export function OrderDetailsProvider(props){
    const [optionCounts, setOptionCounts] = useState({
       scoops:{}, //{ Chocolte: 1, Vanilla:2 }
       toppings:{} 
    })
 function updateOrderDeatils(itemName, newItemCount, optionType){
    //make a copy of existing state to stop state mutation
   const newOptionCounts = {...optionCounts};
   newOptionCounts[optionType][itemName] = newItemCount;
   //update the value
   setOptionCounts(newOptionCounts);
 }  

 function calculateTotal(optionType){
    //get total no of scoops or toppings
    const countsArray = Object.values(optionCounts[optionType]);

    //sum those array
    const totalCount = countsArray.reduce((total, value)=> total+value, 0);
    //multiply with price of the item
    return totalCount * pricePerItem[optionType]
 }

 const totals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings')
 };
 function resetOrder(){
    setOptionCounts({
        scoops:{},
        toppings:{}   
    })
 }
     const value= {optionCounts, updateOrderDeatils, resetOrder, totals}
    return <OrderDetails.Provider value={value} {...props}/>
}