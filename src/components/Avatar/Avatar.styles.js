import styled from "styled-components";

const sizes = {
  micro: { fontSize: "10px", imageSize: "20px" },
  tiny: { fontSize: "20px", imageSize: "40px" },
  small: { fontSize: "50px", imageSize: "100px" },
  medium: { fontSize: "80px", imageSize: "150px" },
  large: { fontSize: "120px", imageSize: "200px" },
};

const AvatarStyles = styled.div`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  display: inline-flex;
  height: ${(props) => sizes[props.size].imageSize};
  justify-content: center;
  width: ${(props) => sizes[props.size].imageSize};
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
