import { Dropdown } from "antd";
import Search from "antd/lib/input/Search";
import styled from "styled-components";

const HeaderCustomStyle = styled.div`
background: #fff;
height: 81px;
padding: 8px 20px;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 0 calc(50vw - 570px);
margin: auto;
border-bottom: 1px solid #e4e5e7;
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
`;

const SearchButtonStyle = styled(Search)`
input {
  height: 42px;
  border-radius: 5px 0 0 5px !important;
  :hover, :focus {
    border: 1px solid #d9d9d9;
    outline: none;
  }
}
button {
  width: 55px;
  height: 42px;
  background-color: #222325;
  border-radius: 0 5px 5px 0 !important;
  :hover, :focus {
    background-color: #222325;
  }
  svg {
    color: white;
  }
}
`;

export {
  HeaderCustomStyle,
  DropDownStyle,
  InfoStyle,
  SearchButtonStyle
}