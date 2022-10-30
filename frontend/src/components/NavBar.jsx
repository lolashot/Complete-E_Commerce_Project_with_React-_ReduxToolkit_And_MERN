import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const NavBar = () => {
  const {cartTotalQuantity} = useSelector(state => state.cart)
    return ( 
    <nav className="nav-bar">
        <Link to="/">
            <h2>Topklazzic</h2>
            </Link>
            <Link to="/cart">
    <div className="shop-bag">
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="35"
     height="35" 
     fill="currentColor" 
     class="bi bi-cart-fill" 
     viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span className="bag-quantity"> 
<span>{cartTotalQuantity}</span>
</span>
    </div>
    </Link>
  </nav>
     );
}
 
export default NavBar;