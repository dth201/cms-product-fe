import { Button, Image } from "antd";
import styled from "styled-components";

const DetailProductStyle = styled.div`
margin-top: 70px;
display: flex;
align-items: flex-start;
.ant-image {
  height: 350px;
  width: 350px;
  img {
    border-radius: 3px;
  }
}
`;

const ImageStyle = styled(Image)`

`;

const ButtonStyle = styled(Button)`
background-color: rgb(254, 166, 40);
border-radius: 5px;
color: white;
border: none;
font-weight: 460;
margin-top: auto;
:hover, :focus {
  background-color: rgb(254, 166, 40);
  color: white;
  border: none;
}

`;

const InfoStyle = styled.div`
display: flex;
align-items: baseline;
flex-direction: column;
flex: 1;
height: 350px !important;
`;

export {
  DetailProductStyle,
  ImageStyle,
  InfoStyle,
  ButtonStyle
}