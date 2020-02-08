import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchWrapper } from "./SearchStyle";
export default function SearchHotels(props) {
  const [search, setSearch] = useState("");
  const handleSearchData = e => {
    setSearch(e.target.value);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    props.searchdata.data.history.push("/room");
    props.search(search);
    setSearch("");
  };
  return (
    <SearchWrapper>
      <form action="" onSubmit={handleFormSubmit}>
        <FaSearch style={{ color: "#44c27b" }} />
        <input
          type="text"
          onChange={handleSearchData}
          value={search}
          placeholder="Search Best Hotels Near You"
        />
      </form>
    </SearchWrapper>
  );
}
