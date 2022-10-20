import { Tabs } from "antd";
import Search from "antd/lib/input/Search";
import styled from "styled-components";

const SidebarStyle = styled.div`


`;

const CategoryTab = styled(Tabs)`
.ant-tabs-nav {
  padding: 0 calc(50vw - 570px);
  height: 41px;
  .ant-tabs-nav-list {
    .ant-tabs-tab-btn {
      color: #74767e;
      font-weight: 400;
    }
    .ant-tabs-ink-bar {
      background: #1dbf73;
    }
  }
}
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
width: 20%;
flex: 0 0 20%;
padding: 0 8px;
margin-bottom: 20px;

`;

const ProductMain = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding: 10px 8px;
border-radius: 5px;
`

const PaginationStyle = styled.div`
.ant-pagination {
  margin: auto;
  width: fit-content;
}
`;


const FrameCreateProduct = styled.div`
display: flex;
align-items: center;
.ant-carousel {
  width: 860px;
}
`;

const CreateProduct = styled.div`
    background: #fafafa;
    border: 1px solid #efeff0;
    padding: 50px 24px 32px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    width: 260px;
    height: 240px;
    p {
      padding: 12px 0 32px;
    color: #404145;
    font-size: 16px;
    margin-bottom: 0;
    }
    button {
      border: 1px solid transparent;
      border-radius: 4px;
      font-weight: 600;
      border-radius: 4px;
      font-weight: 600;
      background-color: #1dbf73;
      padding: 6px 16px;
      font-size: 14px;
      color: white;
      cursor: pointer;
    }
`;


export {
  SidebarStyle,
  HeaderSideBarStyle,
  ContentSideBarStyle,
  ContentPageStyle,
  SearchButtonStyle,
  ProductContentStyle,
  ProductStyle,
  PaginationStyle,
  CategoryTab,
  ProductMain,
  FrameCreateProduct,
  CreateProduct
}