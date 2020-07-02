import React from "react";

export function Search({ searchField }) {
  return (
    <div className="header__wrapper__search-and-login__search">
      <div
        className="fa fa-search"
        aria-hidden="true"
        onClick={() => {
          searchField.current.value = "";
          searchField.current.classList.toggle("show");
        }}
      ></div>
      <input
        className="header__wrapper__search-and-login__search__search-field"
        type="text"
        placeholder="Fiend the book or author"
        ref={searchField}
      ></input>
    </div>
  );
}
