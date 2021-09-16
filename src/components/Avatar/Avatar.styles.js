import styled from "styled-components";

const sizes = {
  micro: { fontSize: "0.7rem", imageSize: "20px" },
  tiny: { fontSize: "1.5rem", imageSize: "40px" },
  small: { fontSize: "3rem", imageSize: "100px" },
  medium: { fontSize: "5rem", imageSize: "150px" },
  large: { fontSize: "8rem", imageSize: "200px" },
};

const AvatarStyles = styled.div`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  display: inline-flex;
  height: ${(props) => sizes[props.size].imageSize};
  justify-content: center;
  width: ${(props) => sizes[props.size].imageSize};
  overflow: hidden;
  .avatar__text {
    color: ${(props) => props.textColor};
    font-size: ${(props) => sizes[props.size].fontSize};
    font-weight: bold;
  }
  .avatar__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default AvatarStyles;
