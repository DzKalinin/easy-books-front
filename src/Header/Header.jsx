import React from "react";

import { Menu } from "./Menu";
import "./header.css";

export class Header extends React.Component { 
  state = {};

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <Menu />
          <div className="header__wrapper__search-and-login">
            <div className="header__wrapper__search-and-login__search">
              <div
                className="fa fa-search"
                aria-hidden="true"
                onClick={() => {
                  this.refs.searchField.value = "";
                  this.refs.searchField.classList.toggle("show");
                }}
              ></div>
              <input
                className="header__wrapper__search-and-login__search__search-field"
                type="text"
                placeholder="Fiend the book or author"
                ref="searchField"
              ></input>
            </div>
            <div className="header__wrapper__search-and-login__login">
              SignIN
            </div>
          </div>
        </div>
      </header>
    );
  }
}
