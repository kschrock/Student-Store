import { Link } from "react-router-dom"
import FilterInput from "../FilterInput/FilterInput"
import codepath from "../../assets/codepath.svg"
import avatar from "../../assets/avatar.png"
import "./Navbar.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Navbar() {
  return ( 
     
    <nav className="Navbar">
      <Link className="logo" to="/">
        <img src={codepath} alt="logo" />
      </Link>

      <div className="search">
        <FilterInput />
      </div>

      <div className="user">
        <div className="notifications">
          <i className="material-icons md-36">Welcome</i>
        </div>
        
      </div>
      <div>
        <ShoppingCartIcon />
        <span>0</span>
      </div>
    </nav>
    
  )
}
