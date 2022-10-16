
import React from 'react';
import { Form, Input, Button } from 'antd'
import { LoginStyle } from './loginStyle';
import { useDispatch } from 'react-redux';
import { storeSetIsLogin } from 'store/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { sendPost } from 'axios/fetch';
import { TextStyle } from 'component/common/commonStyle';
const Login = () => {

  const [form] = useForm();

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
    const param = form.getFieldsValue();
    handleLogin(param);
  };


  return (
    <LoginStyle>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          className="no-account"
        >
          <TextStyle onClick={() => navigate('/register')} textAlign="end" color="#08f" hoverTextDecoration="underline" hoverCursor="pointer">Chưa có tài khoản?</TextStyle>
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={onFinish}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </LoginStyle>

  );
}

export default Login;