
import { Form, Input, Button, message } from 'antd'
import { LoginStyle } from './loginStyle';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { sendPost } from 'axios/fetch';
const Register = () => {

  const [form] = useForm();

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
    form.validateFields();
    const param = form.getFieldsValue();
    handleRegister(param);
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
          label="Họ và tên"
          name="username"
          rules={[{ required: true, message: 'Không được bỏ trống!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[{ required: true, message: 'Không được bỏ trống!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Không được bỏ trống!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Không được bỏ trống!' },
          ({ getFieldValue }) => ({


            validator(_, value) {
              if (getFieldValue('confirmPassword') === value) {
                form.setFields([{ name: 'confirmPassword', errors: undefined }])
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu không trùng nhau!'));
            },
          }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirmPassword"
          rules={[{ required: true, message: 'Không được bỏ trống!' },
          ({ getFieldValue }) => ({


            validator(_, value) {
              if (getFieldValue('password') === value) {
                form.setFields([{ name: 'password', errors: undefined }])
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu không trùng nhau!'));
            },
          }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={onFinish}>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </LoginStyle>

  );
}

export default Register;