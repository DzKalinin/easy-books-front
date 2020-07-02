import React from "react";
import { Link } from "react-router-dom";

export function Menu({ booksDropdowmMenu, comunityDropdowmMenu }) {
  return (
    <nav className="header__wrapper__menu">
      <li
        className="header__wrapper__menu__element drop-list"
        onMouseEnter={() => {
          booksDropdowmMenu.current.classList.add("show");
        }}
        onMouseLeave={() => {
          booksDropdowmMenu.current.classList.remove("show");
        }}
      >
        <Link to="/books">Books</Link>
        <ul className="header__wrapper__dropdown-menu" ref={booksDropdowmMenu}>
          <li>Sales</li>
          <li>New</li>
        </ul>
      </li>
      <li className="header__wrapper__menu__element">
        <Link to="/discussions">Discussions</Link>
      </li>
      <li
        className="header__wrapper__menu__element drop-list"
        onMouseEnter={() => {
          comunityDropdowmMenu.current.classList.add("show");
        }}
        onMouseLeave={() => {
          comunityDropdowmMenu.current.classList.remove("show");
        }}
      >
        <Link to="/comunity">Comunity</Link>
        <ul
          className="header__wrapper__dropdown-menu"
          ref={comunityDropdowmMenu}
        >
          <li>Sales</li>
          <li>New</li>
        </ul>
      </li>
      <li className="header__wrapper__menu__element">
        <Link to="/library">Library</Link>
      </li>
    </nav>
  );
}
