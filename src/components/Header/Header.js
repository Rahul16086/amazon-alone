import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { useStateValue } from "../../Store/UserData";

const Header = () => {
  const [{ cart }] = useStateValue();
  console.log(cart);
  return (
    <nav className={"header"}>
      <Link to={"/"}>
        <img
          className={"header__logo"}
          src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"}
          alt={"logo"}
        />
      </Link>

      <div className={"header__search"}>
        <input type={"text"} className={"header__searchInput"} />
        <SearchIcon className={"header__searchIcon"} />
      </div>

      <div className={"header__nav"}>
        <Link to={"/login"} className={"header__link"}>
          <div className={"header__option"}>
            <span className={"header__optionFirstLine"}>Hello Rahul!</span>
            <span className={"header__optionSecondLine"}>Sign in</span>
          </div>
        </Link>
        <Link to={"/"} className={"header__link"}>
          <div className={"header__option"}>
            <span className={"header__optionFirstLine"}>Returns</span>
            <span className={"header__optionSecondLine"}>& Orders</span>
          </div>
        </Link>
        <Link to={"/login"} className={"header__link"}>
          <div className={"header__option"}>
            <span className={"header__optionFirstLine"}>Your</span>
            <span className={"header__optionSecondLine"}>Prime</span>
          </div>
        </Link>
        <Link to={"/checkout"} className={"header__link"}>
          <div className={"header__optionCart"}>
            <ShoppingBasketOutlinedIcon />
            <span className={"header__optionSecondLine header__cartCount"}>
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
