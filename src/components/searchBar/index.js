import React, { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

function SearchBar({ placeholder = "" }) {
  // states
  const [val, setVal] = useState("");

  // url location
  const navigate = useNavigate();

  // handle
  const handleSearch = (value) => {
    navigate(`search?celeb=${value}`);
  };

  return (
    <Input.Search
      size="large"
      value={val}
      className={"rounded overflow-hidden border-2"}
      placeholder={placeholder}
      onChange={(e) => setVal(e.target.value)}
      onSearch={handleSearch}
    />
  );
}

export default SearchBar;
