
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
