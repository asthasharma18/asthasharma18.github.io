import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// thunk functions
export const sendCartData = (cart) => {
    return async (dispatch)=> {
  
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending ...',
            message: 'Sending cart data'
                 }));
        const sendRequest = async () => {
          const response = await fetch(`https://cart-e2a7d-default-rtdb.firebaseio.com/cart.json`, {
            method:'PUT',
            body: JSON.stringify(cart),
            });
            
           if(!response.ok) {
             throw new Error('Sending cart data failed');
                 };
        } 
       try{
        await sendRequest();
        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully'
        }));
       } catch (error) {
        
       }
       
    }};


  export const fetchCartData = ( ) => {
    return async(dispatch) => {
      const fetchData = async () => {
        const response = await fetch(`https://cart-e2a7d-default-rtdb.firebaseio.com/cart.json`, {
          method:'GET'
          });

        if(!response.ok){
          throw new Error('Fetching cart data failed')
        }

        const data = await response.json();
        return data;
      };
      try{
        const cartData= await fetchData();
        dispatch(cartActions.replaceCart({
          items: cartData.items || [],                 //that will make sure items are never undefined
          totalQuantity: cartData.totalQuantity
        }));
      } catch(error){
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!!!',
          message: 'Fetching cart data failed'
        }));
      }
    }
  }