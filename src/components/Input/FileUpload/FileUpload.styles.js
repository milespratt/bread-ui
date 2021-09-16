import styled from "styled-components";

const FileUploadStyles = styled.div`
  border: 2px
    ${(props) => {
      if (props.uploaded) {
        return "solid #12855F";
      }
      if (props.dragging || props.uploading) {
        return "solid #027bc3";
      }
      return "dashed #282c36";
    }};
  cursor: ${(props) => (props.uploading ? "default" : "pointer")};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  white-space: nowrap;
  progress {
    width: 100%;
    border-radius: 0;
    outline: 2px solid #282c36;
    margin-top: 5px;
    height: 10px;
    box-sizing: border-box;
    transition: width 1s ease;
  }
  progress::-webkit-progress-bar {
    background-color: white;
  }
  progress::-webkit-progress-value {
    background: "red";
    background-color: ${(props) => (props.uploaded ? "#12855F" : "#027bc3")};
    transition: width 250ms ease;
  }
  progress::-moz-progress-bar {
    background-color: ${(props) => (props.uploaded ? "#12855F" : "#027bc3")};
    transition: width 250ms ease;
  }
  * {
    pointer-events: none;
  }
  input {
    display: none;
  }
`;

export default FileUploadStyles;
