import styled from "styled-components";

const TabsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .tabs {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-gap: 10px;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .tabs::after {
    background-color: #e8e9ea;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .tab {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    outline: none;
    padding: 10px 0;
    white-space: nowrap;
  }

  .tab:hover {
    /* border-bottom: 2px solid #93959a; */
    /* padding-bottom: 8px; */
    color: #027bc3;
  }

  .tab--active {
    border-bottom: 2px solid #027bc3;
    padding-bottom: 8px;
    cursor: default;
    color: #027bc3;
  }

  .content {
    width: 100%;
  }
  .tab__content {
    width: 100%;
  }
`;

export default TabsStyles;
