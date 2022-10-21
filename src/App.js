import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './layout/Main';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Order from './components/order/Order';
import Inventory from './components/Inventory/Inventory';
import Home from './components/Home/Home';
import { productsAndCartLoader } from './loaders/ProductsAndCartLoader';
import Login from './components/login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/shipping/Shipping';
import PrivetRout from './routes/PrivetRout';



function App() {
  const router =  createBrowserRouter([
    {path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>{
            return fetch('products.json')
          },
          element:<Shop></Shop>
        },
        {
          path:'order',
          loader:()=>productsAndCartLoader(),
          element:<Order></Order>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/shipping',
          element:<PrivetRout><Shipping></Shipping></PrivetRout>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
      ]
  },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
