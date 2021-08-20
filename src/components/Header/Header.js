import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { useStateValue } from "../../Store/UserData";
import { auth } from "../../firebase";
import Hamburger from "hamburger-react";
import Backdrop from "@material-ui/core/Backdrop";

const Header = () => {
  const [{ cart, user }] = useStateValue();
  const [hamClicked, setHamClicked] = useState(false);

  const login = () => {
    if (user) auth.signOut();
  };
  console.log(hamClicked);

  const hamClickToggler = () => {
    setHamClicked(() => !hamClicked);
  };
  return (
    <>
      <nav className={"header"}>
        {" "}
        <div className={"header__leftSide"}>
          <div className={"hamburger"}>
            <Hamburger toggled={hamClicked} toggle={setHamClicked} />
          </div>
          <Link to={"/"}>
            <img
              className={"header__logo"}
              src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"}
              alt={"logo"}
            />
          </Link>{" "}
          <div className={"userNameM"}>
            {user ? (
              <h1 style={{ color: "white", fontSize: "15px" }}>
                Hello {user?.email}!
              </h1>
            ) : null}
          </div>
          <Link to={"/checkout"} className={"header__linkM"}>
            <div className={"header__optionCart"}>
              <ShoppingBasketOutlinedIcon />
              <span className={"header__optionSecondLine header__cartCount"}>
                {cart?.length}
              </span>
            </div>
          </Link>
          <div className={"header__searchContainer"}>
            <div className={"header__search"}>
              <input type={"text"} className={"header__searchInput"} />
              <SearchIcon className={"header__searchIcon"} />
            </div>
          </div>
        </div>
        <div className={"header__nav"}>
          <Link to={!user && "/login"} className={"header__link"}>
            <div onClick={login} className={"header__option"}>
              <span className={"header__optionFirstLine"}>
                Hello {user?.email}!
              </span>
              <span className={"header__optionSecondLine"}>
                {user ? "Sign Out" : "Sign in"}
              </span>
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
        <div className={"header__searchContainerM"}>
          <div className={"header__search"}>
            <input type={"text"} className={"header__searchInput"} />
            <SearchIcon className={"header__searchIcon"} />
          </div>
        </div>
        {hamClicked && (
          <div className={"header__rightSideM"}>
            <Link to={!user && "/login"} className={"header__linkM"}>
              <div onClick={login} className={"header__option"}>
                <h1>{user ? "Sign Out" : "Sign in"}</h1>
              </div>
            </Link>
            <Link to={"/"} className={"header__linkM"}>
              <div className={"header__optionM"}>
                <h1>Returns & Orders</h1>
              </div>
            </Link>

            <Link to={"/login"} className={"header__linkM"}>
              <div className={"header__optionM"}>
                <h1>Your Prime</h1>
              </div>
            </Link>
          </div>
        )}
        <Backdrop open={hamClicked} onClick={hamClickToggler} />
      </nav>
    </>
  );
};

export default Header;
