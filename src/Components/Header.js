import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { bubble as Menu } from "react-burger-menu";
import "../assets/css/Header.css";
import hamburger from "../assets/Svg/hamburger.svg";
import cross from "../assets/Svg/cross.svg";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakPoint) {
    return (
      <nav
        className="navbar navbar-expand navbar-dark "
        style={{ background: " #ff7f50" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" width={150} />
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="menu-item">
                <a className="nav-link active menu-item" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link menu-item" href="/flights">
                  Flights
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link menu-item" href="/hotels">
                  Hotels
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link menu-item" href="/">
                  Activities
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar  " style={{ background: " #ff7f50" }}>
        <Menu
          right
          customBurgerIcon={<img src={hamburger} alt="icon" />}
          customCrossIcon={<img src={cross} alt="cross" />}
        >
          <div className="contaienr-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" width={150} />
            </a>

<div>
<ul className="navbar-nav me-auto">
              <li className="nav-item mobile">
                <a className="menu-item" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mobile">
                <a className="menu-item" href="/flights">
                  Flights
                </a>
              </li>
              <li className="nav-item mobile">
                <a className="menu-item" href="/hotels">
                  Hotels
                </a>
              </li>

              <li className="nav-item mobile">
                <a className="menu-item" href="/">
                  Activities
                </a>
              </li>
            </ul>
</div>
           
          </div>
        </Menu>
      </nav>
    );
  }
};

export default Header;
