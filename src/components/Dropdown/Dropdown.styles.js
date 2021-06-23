import styled from "styled-components";

const DropdownStyles = styled.div`
  border: 2px solid #282c36;
  padding-left: 5px;
  padding-right: 35px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 30px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23282c36%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  .dropdown__title {
  }
  .dropdown__content {
    position: absolute;
    display: none;
    top: 32px;
    background-color: white;
    width: 100%;
    left: -2px;
    border: 2px solid #282c36;
  }
  .dropdown__content:before {
    height: 4px;
    content: "";
    position: absolute;
    width: 100%;
    background-color: red;
    top: -6px;
    opacity: 0;
  }
  .dropdown__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .dropdown__item {
    padding: 5px;
    margin: 5px 0 5px 0;
    cursor: pointer;
  }
  .dropdown__item:first-child {
    margin-top: 0;
  }
  .dropdown__item:last-child {
    margin-bottom: 0;
  }
  .dropdown__item:hover {
    background-color: #027bc3;
    color: #e7f5fc;
  }
  &&:hover {
    .dropdown__content {
      display: block;
    }
  }
`;

export default DropdownStyles;
