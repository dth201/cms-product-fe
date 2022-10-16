import { sendGet, sendPost } from "axios/fetch";
import { FlexBox, SpaceStyle, TextStyle } from "component/common/commonStyle";
import ContentCustom from "component/Content/Content";
import { useParams } from "react-router-dom";
import { ButtonStyle, DetailProductStyle, ImageStyle, InfoStyle } from "./detailStyle";
import { useEffect, useState } from 'react'
import { IProductData } from "pages/home/Home";
import { IMAGE_URL } from "config";
import { Form, InputNumber, message, Modal } from "antd";
import { useSelector } from "react-redux";

interface IUserProduct {
  isChoose?: boolean;
  id: string;
  user?: {
    id: string;
    email: string;
    username: string
    phone: string;
  }
}

const DetailProduct = () => {

  const param: any = useParams();

  const [form] = Form.useForm();

  const { userInfo } = useSelector((state: any) => state?.auth);

  const [product, setProduct] = useState<IProductData>();

  const [infoUser, setInfoUser] = useState<IUserProduct>();

  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  const [visible, setVisible] = useState<boolean>(false);

  const getInfo = async () => {
    const result = await sendGet(`products/${param?.idProduct}`);
    if (result?.data) {
      setProduct(result?.data);
    }
  };

  const statusEstimate = async () => {
    sendPost('estimates/product', { productId: param?.idProduct }).then((res) => {
      if (res) {
        setInfoUser(res?.data);
      }

    }).catch((error) => {
      console.log(error);
    })
  };


  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    statusEstimate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefetch])

  useEffect(() => {
    if (!visible) {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const sendEstimate = async () => {
    const { price, timeComplete } = form.getFieldsValue();

    if (!price || !timeComplete) {
      !price && form.setFields([{ name: 'price', errors: ['Không được bỏ trống!'] }]);
      !timeComplete && form.setFields([{ name: 'timeComplete', errors: ['Không được bỏ trống!'] }]);
      return;
    };

    const body = {
      userId: userInfo?.id,
      productId: param?.idProduct,
      price,
      timeComplete,
    }

    sendPost('estimates', body)
      .then(() => {
        message.success('Estimate thành công!. Thông tin này sẽ được gửi đến chủ sản phẩm.');
        setVisible(false);
        setIsRefetch(!isRefetch);
      })
      .catch(() => message.error('Lỗi hệ thống'))
  };

  const cancelEstimate = async () => {
    sendPost(`estimates/delete/${infoUser?.id}`, {})
      .then(() => {
        message.success('Hủy bỏ thành công!');
        setIsRefetch(!isRefetch);
      })
      .catch(() => {
        message.error('Lỗi hệ thống!')
      })
  }


  return (
    <ContentCustom>
      <TextStyle margin="20px 0 0 0" color="black" fontWeight="500" fontSize="30px">Chi tiết sản phẩm</TextStyle>
      <DetailProductStyle>
        <ImageStyle src={IMAGE_URL + product?.image} />

        <SpaceStyle padding="10px" />
        <InfoStyle>
          <TextStyle limitLine="2" color="rgba(0,0,0,.8)" fontWeight="500" fontSize="20px">{product?.name} </TextStyle>

          <FlexBox width="100%" justifyContent="space-between">
            <FlexBox>
              <TextStyle fontSize="16px" color="#ee4d2d">₫</TextStyle>
              <TextStyle fontSize="30px" color="#ee4d2d">{product?.priceStart.toLocaleString('en-IE')}</TextStyle>
              <TextStyle fontWright="500" fontSize="20px" color="#ee4d2d" margin="3px">-</TextStyle>
              <TextStyle fontSize="16px" color="#ee4d2d">₫</TextStyle>
              <TextStyle fontSize="30px" color="#ee4d2d">{product?.priceEnd.toLocaleString('en-IE')}</TextStyle>
            </FlexBox>

            <FlexBox alignItem="baseline">
              <TextStyle fontSize="16px" limitLine="1" color="rgba(0,0,0,.87)" fontWeight="400">Thời gian:</TextStyle>
              <SpaceStyle padding="2px" />
              <TextStyle fontSize="25px" color="#ee4d2d">{product?.timeComplete}</TextStyle>
              <SpaceStyle padding="2px" />
              <TextStyle fontSize="16px" limitLine="1" color="rgba(0,0,0,.87)" fontWeight="400">ngày</TextStyle>
            </FlexBox>

          </FlexBox>

          <SpaceStyle padding="8px" />

          <TextStyle color="rgba(0, 0, 0, 0.87)" fontWeight="500" fontSize="18px">Mô tả chi tiết</TextStyle>

          <TextStyle color="rgba(0, 0, 0, 0.8)" fontWeight="400" fontSize="14px">{product?.description}</TextStyle>


          <SpaceStyle padding="8px" />
          <TextStyle color="rgba(0, 0, 0, 0.8)" fontWeight="500" fontSize="16px">Thông tin người gửi yêu cầu</TextStyle>

          <FlexBox width="100%" justifyContent="space-between">
            <FlexBox>
              <TextStyle color="#827e7e" fontSize="13px" margin="0 5px 0 0">Họ tên:</TextStyle>
              <TextStyle color="rgba(0, 0, 0, 0.8)" fontWeight="500" fontSize="15px">{product?.user?.username}</TextStyle>
            </FlexBox>

            <FlexBox>
              <TextStyle color="#827e7e" fontSize="13px" margin="0 5px 0 0">Số điện thoại:</TextStyle>
              <TextStyle color="rgba(0, 0, 0, 0.8)" fontWeight="500" fontSize="15px">{product?.user?.phone}</TextStyle>
            </FlexBox>

            <FlexBox>
              <TextStyle color="#827e7e" fontSize="13px" margin="0 5px 0 0">Email:</TextStyle>
              <TextStyle color="rgba(0, 0, 0, 0.8)" fontWeight="500" fontSize="15px">{product?.user?.email}</TextStyle>
            </FlexBox>

          </FlexBox>

          {product?.user?.id !== userInfo?.id && (infoUser ? <ButtonStyle onClick={() => {

            Modal.confirm({ content: 'Bạn có chắc muốn hủy bỏ yêu cầu ?', onOk: cancelEstimate })
          }}>Hủy bỏ yêu cầu</ButtonStyle> : <ButtonStyle onClick={() => setVisible(true)}>Yêu cầu nhận sản phẩm</ButtonStyle>)}

          <Modal visible={visible} title="Estimate" okText="Gửi" cancelText="Hủy" onOk={sendEstimate} onCancel={() => setVisible(false)}>
            <TextStyle color="black" fontSize="20px" fontWeight="500">Nhập thông tin estimate về sản phẩm</TextStyle>

            <SpaceStyle padding="10px" />
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              form={form}
            >
              <Form.Item
                label="Giá tiền estimate"
                name="price"
                rules={[{ required: true, message: 'Không được bỏ trống!' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                label="Thời gian hoàn thành"
                name="timeComplete"
                rules={[{ required: true, message: 'Không được bỏ trống!' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>

            </Form>
          </Modal>

        </InfoStyle>
      </DetailProductStyle>
    </ContentCustom>
  )
}

export default DetailProduct;