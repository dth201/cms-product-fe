
import { Col, Input, message, Row } from 'antd'
import { ButtonFrame, ErrorText, FormStyle, RegisterFrame, RegisterStyle } from './loginStyle';
import { useNavigate } from 'react-router-dom';
import { sendPost } from 'axios/fetch';
import { FrameIcon } from 'pages/login/loginStyle';
import { SpaceStyle } from 'component/common/commonStyle';
import { useState } from 'react';
import { comparePassword } from './validate';
import { stringify } from 'querystring';
interface IRegisterProp {
  email: string;
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
const Register = () => {

  const [values, setValues] = useState<IRegisterProp>({ email: '', username: '', phone: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState<{ password: string, passwordConfirm: string }>({ password: '', passwordConfirm: '' });

  const navigate = useNavigate();

  const handleRegister = async (value: any) => {
    sendPost('auth/register', value)
      .then(() => {
        navigate('/login')
      })
      .catch(err => {
        message.error(err?.message)

      })

  }

  const onFinish = () => {
    handleRegister(values);
  };

  const updateValue = (value: any) => {
    setValues({ ...values, ...value });
  };

  const updateError = (value: any) => {
    setErrors({ ...errors, ...value });
  };

  return (
    <RegisterStyle>
      <RegisterFrame>
        <ButtonFrame>
          <div></div>
          <button className='toggle-btn' onClick={() => navigate('/login')}>Đăng nhập</button>
          <button className='toggle-btn'>Đăng ký</button>
        </ButtonFrame>

        <FrameIcon>
          <img src="https://librarymnguet.herokuapp.com/images/fb.png" alt="" />
          <img src="https://librarymnguet.herokuapp.com/images/tw.png" alt="" />
          <img src="https://librarymnguet.herokuapp.com/images/gp.png" alt="" />
        </FrameIcon>

        <SpaceStyle padding="10px" />

        <FormStyle>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <Input onChange={(e: any) => updateValue({ username: e?.target?.value })} value={values.username} placeholder='Họ và tên' />
            </Col>

            <Col span={12}>
              <Input onChange={(e: any) => {
                const error = comparePassword(e?.target?.value, values.confirmPassword);
                updateValue({ password: e?.target?.value })
                updateError({ password: error, confirmPassword: error });

              }} value={values.password} type='password' placeholder='Password' />
              {errors.password.length > 0 && <ErrorText>{errors.password}</ErrorText>}
            </Col>

            <Col span={12}>
              <Input onChange={(e: any) => updateValue({ phone: e?.target?.value })} value={values.phone} placeholder='Số điện thoại' />
            </Col>
            <Col span={12}>
              <Input onChange={(e: any) => {
                const error = comparePassword(values.password, e?.target?.value);
                updateValue({ confirmPassword: e?.target?.value })
                updateError({ confirmPassword: error, password: error });

              }} value={values.confirmPassword} type='password' placeholder='ConfirmPassword' />
              {errors.password.length > 0 && <ErrorText>{errors.password}</ErrorText>}
            </Col>

            <Col span={12}>
              <Input onChange={(e: any) => updateValue({ email: e?.target?.value })} value={values.email} placeholder='Email' />
            </Col>

            <SpaceStyle padding="10px" />

            <Col span={24}>
              <button onClick={onFinish}>Đăng ký</button>
            </Col>

          </Row>
        </FormStyle>

      </RegisterFrame>
    </RegisterStyle>

  );
}

export default Register;