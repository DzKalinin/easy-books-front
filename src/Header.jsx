import React from "react";

import "./header.css";

export class Header extends React.Component {
  state = {};

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <nav className="header__wrapper__menu">
            <li className="header__wrapper__menu__element">Books</li>
            <li className="header__wrapper__menu__element">Discussions</li>
            <li className="header__wrapper__menu__element">Comunity</li>
            <li className="header__wrapper__menu__element">Library</li>
          </nav>
          <div className="header__wrapper__search-and-login">
            <div className="header__wrapper__search-and-login__search">
              Search
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
