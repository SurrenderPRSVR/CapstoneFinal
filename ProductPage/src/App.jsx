import './App.css';
import {Route, Routes } from 'react-router-dom'; //Necessary router components
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div>
       <h1>Something for Everybody</h1>
      <Routes>
       <Route exact path="/" component={Home} />
       <Route path="/products" component={Products} />
       <Route path="/product-details" component={ProductDetails} />
       <Route path="/checkout" component={Checkout} />
      </Routes>

      <BottomNav />
    </div>
      
  
  );
}

export default App;
