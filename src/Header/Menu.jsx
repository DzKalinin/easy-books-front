import React from "react";
import { Link } from "react-router-dom";

export class Menu extends React.Component {
  render() {
    return (
      <nav className="header__wrapper__menu">
        <li
          className="header__wrapper__menu__element drop-list"
          onMouseEnter={() => {
            this.refs.booksDropdowmMenu.classList.add("show");
          }}
          onMouseLeave={() => {
            this.refs.booksDropdowmMenu.classList.remove("show");
          }}
        >
          <Link to="/books">Books</Link>
          <ul
            className="header__wrapper__dropdown-menu"
            ref="booksDropdowmMenu"
          >
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
            this.refs.comunityDropdowmMenu.classList.add("show");
          }}
          onMouseLeave={() => {
            this.refs.comunityDropdowmMenu.classList.remove("show");
          }}
        >
          <Link to="/comunity">Comunity</Link>
          <ul
            className="header__wrapper__dropdown-menu"
            ref="comunityDropdowmMenu"
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
}
