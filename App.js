import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './navbar';
import Stocks from './components/stocks';
import Favourites from './components/favourites';
import Cart from './components/cart';
import Camp from './components/camp';

function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Stocks/>} />
      <Route path="/favourites"  element={<Favourites />}/>
      <Route path="/cart"  element={<Cart/>}/>
      <Route path="/camp"  element={<Camp/>}/>

    </Routes>
    </div>
    </>
   
  );
}

export default App;

