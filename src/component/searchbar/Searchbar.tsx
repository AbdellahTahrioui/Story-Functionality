import React from "react";
  
import "./Searchbar.css";

interface Props {
  searchValue: string;
  onSearchValueChange: Function;
}

export default function Searchbar({ searchValue, onSearchValueChange }: Props) {
  return (
    <div className="searchbar-container">
      <input
        onChange={(e) => {
          onSearchValueChange(e.target.value);
        }}
        id="searchbar"
      />
      {searchValue === "" && (
        <div
          onClick={(e) => {
            document.getElementById("searchbar")?.focus();
          }}
          className="searchbar-placeholder"
        >
          <span>Search</span>
        </div>
      )}
    </div>
  );
}
