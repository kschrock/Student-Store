import { Link } from "react-router-dom"
import "./ShoppingCart.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function ShoppingCart({cartNumber}) {
 
  return ( 
     <Link to="/checkout">
      <div className="notifications">
        <ShoppingCartIcon to="/checkout" />
        <span>&nbsp; {cartNumber}</span>
      </div>
      </Link>
    
  )
}

