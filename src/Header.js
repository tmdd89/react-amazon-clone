import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
      <img
        className="header__logo"
        src="https://www.clipartkey.com/mpngs/b/147-1478733_amazon-clipart.png"
        alt=""
      />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input 
          className="header__searchInput" 
          type="text" 
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      <Link to="/login" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>  
        </div>
      </Link>
      
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>  
        </div>
      </Link>
      
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>  
        </div>
      </Link>

      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </Link>
      </div>

    </nav>
    
  );
}

export default Header;
