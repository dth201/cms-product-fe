import { Button } from "antd";
import styled from "styled-components";

const CreateProductStyle = styled.div`
padding-top: 10px;
.ant-input-number {
  width: 100%;
}
input, .ant-select-selector, textarea, .ant-input-number {
  border-radius: 4px !important;
}
`;

const ButtonCreate = styled(Button)`
    background-color: #1dbf73; 
    padding: 6px 16px;
    font-size: 14px;
    color : white;
    border: 1px solid transparent;
    border-radius: 4px;
    font-weight: 600;
    display: inline-block;
    line-height: 100%;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
`

export {
  CreateProductStyle,
  ButtonCreate
}