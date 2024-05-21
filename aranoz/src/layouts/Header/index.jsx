import React from 'react'
import "./index.scss";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
const Header = () => {
  return (
    <header>
        <div className="container">
            <div id="header-left">
              <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="aranoz." />
            </div>
            <div id="header-middle">
            <ul>
                <NavLink to={"/"}><li>Home</li></NavLink>
                <NavLink to={"/shop"}><li>Shop</li></NavLink>
                <NavLink to={"/pages"}><li>Pages</li></NavLink>
                <NavLink to={"/blog"}><li>Blog</li></NavLink>
                <NavLink to={"/contact"}><li>Contact</li></NavLink>
            </ul>
            </div>
            <div id="header-right">
              <div className="icons">
                <div>
              <IoIosSearch />
              </div>
              <div>
              <CiHeart />
              </div>
              <div>
              <LuShoppingCart />
              </div>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header