import { Dropdown } from "antd";
import styled from "styled-components";

const HeaderCustomStyle = styled.div`
background: rgb(245, 62, 45);
height: 55px;
padding: 8px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`;


const DropDownStyle = styled(Dropdown)`
display: flex;
align-items: center;
justify-content: space-between;
`;

const InfoStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export {
  HeaderCustomStyle,
  DropDownStyle,
  InfoStyle
}