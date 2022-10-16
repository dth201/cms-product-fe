import { Button } from "antd";
import styled from "styled-components";

const ProfileStyle = styled.div`


`;

const ProductReceiveStyle = styled.div`


`;

const ProductCreateStyle = styled.div`

`;

const FrameEstimateItem = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
flex: 1;
`;

const EstimateItemStyle = styled.div`
display: flex;
align-items: center;
background: #f8f8f8;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`

const ButtonEstimate = styled(Button)`
position: absolute;
top: 0;
left: 0;
border: none;
background: #08f;
color: white;
padding: 2px 5px;
font-size: 12px;
height: fit-content;
border-radius: 8px;
:hover, :focus {
  background: #08f;
color: white;
}
`;

const ButtonApprove = styled(Button)`
background: #26aa99;
color: white;
padding: 2px 5px;
font-size: 12px;
height: fit-content;
border-radius: 8px;
margin-left: 10px;
:hover, :focus {
  background: #26aa99;
color: white;
}
`;

export {
  ProfileStyle,
  ProductReceiveStyle,
  ProductCreateStyle,
  ButtonEstimate,
  FrameEstimateItem,
  EstimateItemStyle,
  ButtonApprove
}