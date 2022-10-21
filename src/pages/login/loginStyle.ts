import { FlexBox } from "component/common/commonStyle";
import styled from "styled-components";

const LoginStyle = styled.div`
background-image: url('https://librarymnguet.herokuapp.com/images/banner.jpg');
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
`;

const LoginFrame = styled.div`
    width: 420px;
    height: 546px;
    position: relative;
    margin: 0 auto;
    background: #fff;
    padding: 5px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 20px 9px #7a76741f;
    top: 50%;
    transform: translateY(-50%);
`;

const ButtonFrame = styled.div`
width: 240px;
height: 40px;
margin: 35px auto;
position: relative;
box-shadow: 0 0 20px 9px #a835071f;
border-radius: 30px;
display: flex;
background: #999;
div {
  top: 0;
  left: 0;
  position: absolute;
  width: 120px;
  height: 100%;
  background: linear-gradient(to right, #1916dd9f, #dd125f);
  border-radius: 30px;
  transition: 0.5s;
}
.toggle-btn {
  padding: 0;
  width: 120px;
  height: 100%;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
}
`;


const FormStyle = styled(FlexBox)`
input {
  background-color: #fff;
    color: #666;
    padding: 10px 18px;
    border-radius: 5px;
    width: 100%;
    outline: none;
    position: relative;
    font-size: 16px;
    border: 2px solid #ccc;
}
`;

const ButtonSubmit = styled.button`
width: 50%;
padding: 10px 30px;
cursor: pointer;
display: block;
margin: auto;
background: linear-gradient(to right, #1916dd9f, #dd125f);
border: 0;
outline: none;
border-radius: 30px;
color: #fff;
font-size: 16px;
font-weight: 600;
`;


const FrameIcon = styled.div`
    margin: 30px auto;
    text-align: center;
    img {
      width: 30px;
    margin: 0 12px;
    box-shadow: 0 0 20px 0 #7f7f7f3d;
    cursor: pointer;
    border-radius: 50%;
    }
`;

export {
  LoginStyle,
  LoginFrame,
  ButtonFrame,
  FormStyle,
  ButtonSubmit,
  FrameIcon
}