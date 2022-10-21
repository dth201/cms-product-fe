
import { Input, Button } from 'antd'
import { ButtonFrame, ButtonSubmit, FormStyle, FrameIcon, LoginFrame, LoginStyle } from './loginStyle';
import { useDispatch } from 'react-redux';
import { storeSetIsLogin } from 'store/auth';
import { useNavigate } from 'react-router-dom';
import { sendPost } from 'axios/fetch';
import { SpaceStyle } from 'component/common/commonStyle';
import { useState } from 'react';

interface ILoginData {
  email: string;
  password: string;
}
const Login = () => {
  const [values, setValues] = useState<ILoginData>({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (value: any) => {
    const result = await sendPost('auth/login', value);
    if (result?.data) {
      localStorage.setItem('token', result?.data?.accessToken);
      dispatch(storeSetIsLogin(true));
      navigate('/home');
    }
  }

  const onFinish = () => {
    handleLogin(values);
  };



  const updateValue = (value: any) => {
    setValues({ ...values, ...value });
  }

  return (
    <LoginStyle>

      <LoginFrame>
        <ButtonFrame>
          <div></div>
          <Button className='toggle-btn'>Đăng nhập</Button>
          <Button className='toggle-btn' onClick={() => navigate('/register')}>Đăng ký</Button>
        </ButtonFrame>

        <FrameIcon>
          <img src="https://librarymnguet.herokuapp.com/images/fb.png" alt="" />
          <img src="https://librarymnguet.herokuapp.com/images/tw.png" alt="" />
          <img src="https://librarymnguet.herokuapp.com/images/gp.png" alt="" />
        </FrameIcon>

        <SpaceStyle padding="15px" />

        <FormStyle style={{ padding: '0 40px' }} flexDirection="column">
          <Input value={values?.email} onChange={(e: any) => updateValue({ email: e?.target?.value })} placeholder='Email' />

          <SpaceStyle padding="15px" />

          <Input onChange={(e: any) => updateValue({ password: e?.target?.value })} value={values?.password} placeholder='Mật khẩu' type='password' />

          <SpaceStyle padding="15px" />

          <ButtonSubmit onClick={onFinish}>Đăng nhập</ButtonSubmit>
        </FormStyle>
      </LoginFrame>
    </LoginStyle>

  );
}

export default Login;