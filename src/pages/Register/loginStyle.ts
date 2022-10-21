import styled from "styled-components";

const RegisterStyle = styled.div`
background-image: url('https://librarymnguet.herokuapp.com/images/banner.jpg');
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
`;

const RegisterFrame = styled.div`
width: 700px;
    height: 580px;
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
    left: 120px;
    position: absolute;
    width: 120px;
    height: 100%;
    background: linear-gradient(to right, #1916dd9f, #dd125f);
    border-radius: 30px;
    transition: 0.5s;
    }
    button {
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

const FormStyle = styled.div`
padding: 0 20px;
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
button {
  width: 40%;
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
}
`;

const ErrorText = styled.div`
color: red;

`;

export {
  RegisterStyle,
  RegisterFrame,
  ButtonFrame,
  FormStyle,
  ErrorText
}