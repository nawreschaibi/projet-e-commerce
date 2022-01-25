import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logot from "./logot.png";
import basket from "./models/basket.png";
import search from "./models/search.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logot} />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <img className="header_searchIcon" src={search} />
        {/*LOGO*/}
      </div>

      <div className="header_nav">
        <div className="header_option">
          <Link to="/Aboutus">
            <span className="header_optionLinetwo">aboutus</span>
          </Link>
        </div>

        <div className="header_option">
          <Link to="/Signup">
            <span className="header_optionLinetwo">sign in</span>
          </Link>
        </div>
        <div className="header_option">
          <Link to="/Contact">
            <span className="header_optionLinetwo">Contactus</span>
          </Link>
        </div>
        <div>
          <Link to="/shop">
            <span className="header_optionLinetwo">Ourproduct</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
