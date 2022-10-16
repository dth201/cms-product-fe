import Search from "antd/lib/input/Search";
import styled from "styled-components";

const SidebarStyle = styled.div`


`;

const HeaderSideBarStyle = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #ccc;
padding: 5px;
`;

const ContentSideBarStyle = styled.div`
padding: 5px;
`;

const ContentPageStyle = styled.div`

`;

const SearchButtonStyle = styled(Search)`
input {
  height: 43px;
  border-radius: 5px 0 0 5px !important;
  :hover, :focus {
    border: 1px solid #d9d9d9;
    outline: none;
  }
}
button {
  width: 55px;
  height: 43px;
  background-color: #ee4d2d;
  border-radius: 0 5px 5px 0 !important;
  :hover, :focus {
    background-color: #ee4d2d;
  }
  svg {
    color: white;
  }
}
`;

const ProductContentStyle = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
margin-top: 20px;
margin-left: -8px;
margin-right: -8px;
`;

const ProductStyle = styled.div`
width: 25%;
flex: 0 0 25%;
padding: 0 8px;
margin-bottom: 20px;
`;

const PaginationStyle = styled.div`
.ant-pagination {
  margin: auto;
  width: fit-content;
}
`


export {
  SidebarStyle,
  HeaderSideBarStyle,
  ContentSideBarStyle,
  ContentPageStyle,
  SearchButtonStyle,
  ProductContentStyle,
  ProductStyle,
  PaginationStyle
}