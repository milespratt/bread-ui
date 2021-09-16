import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import InputSearchStyles from "./InputSearch.styles";

function InputSearch(props) {
  return (
    <InputSearchStyles>
      <input
        name={props.name}
        id={props.id}
        type="search"
        placeholder="search..."
        onChange={props.onChange}
      />
      <AiOutlineSearch className="search__icon" />
    </InputSearchStyles>
  );
}

InputSearch.propTypes = {};

export default InputSearch;
