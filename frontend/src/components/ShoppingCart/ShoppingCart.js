import { Link } from "react-router-dom"
import "./ShoppingCart.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function ShoppingCart() {
  return ( 
     <Link to="/checkout">
      <div className="notifications">
        <ShoppingCartIcon to="/checkout" />
        <span>&nbsp;0</span>
      </div>
      </Link>
    
  )
}

