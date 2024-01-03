import './App.css';
import GenerateQrCode from './Componenets/GenerateQrCode';
import LoginPage from './Componenets/LoginPage';
import RegisterPage from './Componenets/RegisterPage';
import HomePage from './Componenets/HomePage';
import Navbars from './Componenets/Navbars';
import ProductDetails from './Componenets/ProductDetails';
import { Routes, Route } from "react-router-dom"
import UpdateProduct from './Componenets/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Navbars/>
      <Routes>

        <Route path="/" element={ <HomePage/> } />
        <Route path="/genrateQR" element={ <GenerateQrCode/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/update/:productId" element={ <UpdateProduct/> } />
        <Route path="/detail" element={ <ProductDetails/> } />
        </Routes>

    </div>
  );
}

export default App;
