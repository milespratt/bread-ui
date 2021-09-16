import styled from "styled-components";

const InputSearchStyles = styled.div`
  position: relative;
  display: grid;
  .search__icon {
    position: absolute;
    font-size: 20px;
    left: 5px;
    align-self: center;
  }
  input {
    box-sizing: border-box;
    padding-left: 25px;
  }
`;

export default InputSearchStyles;
