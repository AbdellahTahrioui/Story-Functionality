import React from "react";

import Searchbar from "../searchbar/Searchbar";

interface Props {
  searchValue: string;
  onSearchValueChange: Function;
}

export default function Navbar({ searchValue, onSearchValueChange }: Props) {
  return (
    <div className="navbar-container">
    </div>
  )
}
