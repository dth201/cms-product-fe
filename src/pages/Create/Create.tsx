import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, message, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import { sendGet, sendPost, sendPostFile } from "axios/fetch";
import { SpaceStyle, TextStyle } from "component/common/commonStyle";
import ContentCustom from "component/Content/Content";
import { CreateProductStyle } from "./createStyle";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const { Option } = Select;

const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
};

interface ISubcategoriesData {
  id: string;
  createdAt: string;
  updatedAt: string;
  parentId: string;
  name: string;
}


const CreateProduct = () => {

  const [form] = useForm();
  const [subcategories, setSubcategories] = useState<ISubcategoriesData[]>([]);
  const { userInfo } = useSelector((state: any) => state?.auth);


  const onFinish = () => {
    const body = form.getFieldsValue();
    storeProduct(body);
  };

  const storeProduct = async (body: any) => {
    try {
      await sendPost('products', { ...body, userId: userInfo?.id });
      form.resetFields();
      message.success('Tạo sản phẩm thành công!')
    } catch (err) {
      message.error('Lỗi hệ thống')
    }
  }

  const getSubcategories = async () => {
    const result = await sendGet('categories');

    console.log(result?.data, '123123');

    if (result?.data) {
      setSubcategories(result?.data);
    }

  };

  useEffect(() => {
    getSubcategories();
  }, [])

  const uploadFile = async ({ file, onSuccess, onError }: any) => {
    const formData = new FormData();
    formData.append('file', file);

    const result = await sendPostFile('products/upload', formData);

    if (result?.data) {
      form.setFieldValue('image', result?.data?.url);
      onSuccess();
      return true;
    }

    onError();

    return false;
  }

  return (
    <ContentCustom>
      <SpaceStyle padding="20px" />
      <TextStyle color="black" fontSize="2em" fontWeight="500">Tạo sản phẩm</TextStyle>
      <SpaceStyle padding="20px" />
      <CreateProductStyle>
        <Form
          name="validate_other"
          {...formItemLayout}
          form={form}
        >

          <Form.Item
            name="name"
            label="Tên sản phẩm"
            rules={[{ required: true, message: 'Trường này không được bỏ trống!' }]}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>

          <Form.Item
            name="timeComplete"
            label="Số ngày cần hoàn thành"
            rules={[{ required: true, message: 'Nhập thời gian cần hoàn thành!' }]}
          >
            <InputNumber width={'100%'} placeholder="Nhập thời gian cần hoàn thành" />
          </Form.Item>


          <Form.Item
            name="priceStart"
            label="Giá tối thiểu"
            rules={[
              { required: true, message: 'Trường này không được bỏ trống!' },
              ({ getFieldValue }) => ({


                validator(_, value) {
                  if (getFieldValue('priceEnd') > value) {
                    form.setFields([{ name: 'priceEnd', errors: undefined }])
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Giá tiền tối thiểu phải nhỏ hơn giá tiền tối đa!'));
                },
              }),
            ]}
          >
            <InputNumber width={'100%'} placeholder="Nhập giá tối thiểu" />
          </Form.Item>

          <Form.Item
            name="priceEnd"
            label="Giá tối đa"
            rules={[{ required: true, message: 'Trường này không được bỏ trống!' },
            ({ getFieldValue }) => ({


              validator(_, value) {
                if (getFieldValue('priceStart') < value) {
                  form.setFields([{ name: 'priceStart', errors: undefined }])
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Giá tiền tối thiểu phải nhỏ hơn giá tiền tối đa!'));
              },
            }),
            ]}
          >
            <InputNumber width={'100%'} placeholder="Nhập giá tối đa" />
          </Form.Item>

          <Form.Item
            name="categoryId"
            label="Thể loại sản phẩm"
            hasFeedback
            rules={[{ required: true, message: 'Trường này không được bỏ trống!' }]}
          >
            <Select placeholder="Chọn thể loại sản phẩm" showSearch onChange={(_value: any, option: any) => form.setFieldValue('categoryId', option?.key)}>
              {subcategories?.map((item: ISubcategoriesData) => (<Option key={item?.id} value={item?.id}>{item?.name}</Option>))}
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label="Mô tả chi tiết"
            rules={[{ required: true, message: 'Trường này không được bỏ trống!' }]}
          >
            <TextArea rows={7} placeholder="Nhập chi tiết sản phẩm" />
          </Form.Item>


          <Form.Item
            name="image"
            label="Upload"
            hidden={true}
          >
            <Input />
          </Form.Item>


          <Form.Item
            name="upload"
            label="Upload"
          >
            <Upload customRequest={(info: any) => uploadFile(info)}>
              <Button icon={<UploadOutlined />}>Upload ảnh</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" onClick={onFinish}>
              Đăng sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </CreateProductStyle>
    </ContentCustom>


  )
}

export default CreateProduct;