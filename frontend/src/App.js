import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from './components/Home';
import NotFound from './components/NotFound';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <ToastContainer/>
     <NavBar/>
     <Routes>
      <Route exact path= "/cart" element={<Cart/>}/>
      <Route path= "/not-found" element={<NotFound/>}/>
      <Route exact path= "/" element={<Home/>}/>
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
