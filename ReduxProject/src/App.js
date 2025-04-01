import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-action';

var isInitial = true;
function App() {

  const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  useEffect(()=> {
    dispatch(fetchCartData());    //calling thunk funx
  },[]);
  useEffect(() => {
    //we can write async code either in components using useEffect with store variable as dependency or use a thunk 
    // function in store to make component lean



    // const sendCartData = async() => {
    //   dispatch(uiActions.showNotification({
    //     status: 'pending',
    //     title: 'Sending ...',
    //     message: 'Sending cart data'
    //   }));
    //   const response = await fetch(`https://cart-e2a7d-default-rtdb.firebaseio.com/cart.json`, {
    //     method:'PUT',
    //     body: JSON.stringify(cart),
    //   });

    //   if(!response.ok) {
    //     throw new Error('Sending cart data failed');
    // }

      if(isInitial){
        isInitial = false; 
        return;
      }

      // dispatch(uiActions.showNotification({
      //   status: 'success',
      //   title: 'Success!',
      //   message: 'Sent cart data successfully'
      // }));
      // sendCartData().catch((err) =>{
      //   dispatch(uiActions.showNotification({
      //     status: 'error',
      //     title: 'Error!!!',
      //     message: 'Sending cart data failed'
      //   }));
      // });

      if(cart.changed){
      dispatch(sendCartData(cart));    //calling thunk func
       }
}, [cart, dispatch]);
 
  return (<>
    {notification && <Notification status={notification.status}
       title={notification.title} message={notification.message} />}
    <Layout>
    {isCartVisible && <Cart />}
    <Products />
    </Layout>
  </>
    
  );
}

export default App;
