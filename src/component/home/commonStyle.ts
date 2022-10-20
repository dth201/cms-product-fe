import { Checkbox, Select } from "antd";
import styled from "styled-components";

const GroupSearchStyle = styled.div`

`;
const BoxParentCheck = styled.div<any>`
display: flex;
align-items: center;
svg {
  color: rgb(245,62,45);
  width: 18px;
  height: 18px;
  transform: ${(props) => props?.routeIcon ? 'rotate(180deg)' : 'unset'} ;
  transition: all ease-in-out 0.2s;
}
`;

const BocChildrenCheck = styled.div`
padding-left: 15px;
display: flex;
flex-direction: column;
`;


const CheckBoxStyle = styled(Checkbox)`
margin-left: 0;
padding: 3px;
.ant-checkbox {
  &.ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: rgb(245,62,45);
    }
  }
  .ant-checkbox-inner {
    border-radius: 5px;
  }
}
span {
  color: black;
  font-weight: 400;
}

`;

//filer 
const FilterHomeStyle = styled.div`
padding: 15px 10px;
background-color: rgba(0, 0, 0, 0.04);
border-radius: 3px;
display: flex;
align-items: center;
border-radius: 5px;
border: 1px solid #d2c8c8;
`;



//productietm 
const ProductItemStyle = styled.div`
display: flex;
flex-direction: column;
.ant-image {
  border-radius: 5px 5px 0 0;
  flex: 1;
  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
}

`;

const ProductInfoStyle = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
padding: 5px 0;
`;

const PriceCategoryBox = styled.div`
width: 100%;
`;

const PriceText = styled.div`
display: flex;
align-items: baseline;
color: #878383;
font-size: 12px;
justify-content: space-between;
`;

const BoxStyle = styled.div`
display: flex;
align-items: baseline;
`;

const SelectFilter = styled(Select)`
.ant-select-selector {
  border-radius: 5px;
}
`;

const ImageBg = styled.img<any>`
width: 100%;
height: 240px;
object-fit: cover;
object-position: ${(props) => props?.position || 'top'};
border-radius: 5px;
`



export {
  GroupSearchStyle,
  CheckBoxStyle,
  BoxParentCheck,
  BocChildrenCheck,
  FilterHomeStyle,
  ProductItemStyle,
  ProductInfoStyle,
  PriceCategoryBox,
  PriceText,
  BoxStyle,
  SelectFilter,
  ImageBg
}