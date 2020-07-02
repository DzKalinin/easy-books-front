import React from "react";

import { Menu } from "./Menu";
import { Search } from "./Search";
import { Login } from "./Login";

import "./header.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.booksDropdowmMenu = React.createRef();
    this.comunityDropdowmMenu = React.createRef();
    this.searchField = React.createRef();
  }

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <Menu
            booksDropdowmMenu={this.booksDropdowmMenu}
            comunityDropdowmMenu={this.comunityDropdowmMenu}
          />
          <div className="header__wrapper__search-and-login">
            <Search searchField={this.searchField} />
            <Login />
          </div>
        </div>
      </header>
    );
  }
}
