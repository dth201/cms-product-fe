import { Col, message, Modal, Row } from "antd";
import { sendPost } from "axios/fetch";
import { sendGet } from "axios/fetch";
import { FlexBox, SpaceStyle, TextStyle } from "component/common/commonStyle";
import FilterHome from "component/home/Filter";
import ProductItem from "component/home/ProductItem";
import { EStatusProduct, IProductData } from "pages/home/Home";
import { useEffect, useState, useRef } from "react";
import { ButtonApprove, ButtonEstimate, EstimateItemStyle, FrameEstimateItem, ProductReceiveStyle } from "./profileStyle";


export enum EProfileSortBy {
  OPEN = 1,
  INPROGRESS,
  RESOLVE,
}

interface IParam {
  page: number;
  pageSize?: number;
  sortBy: EProfileSortBy;
}

interface IUserEstimate {
  id: string;
  username: string;
  email: string;
  phone: string;
  timeComplete: number;
  price: number;
  productId: string;
}

const EstimateItem: React.FC<IUserEstimate> = (props) => {
  return (
    <FrameEstimateItem>
      <FlexBox width="100%" justifyContent="space-between">
        <FlexBox>
          <TextStyle color="#757575" fontSize="12px">Tên:</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#222">{props?.username}</TextStyle>
        </FlexBox>

        <FlexBox>
          <TextStyle color="#757575" fontSize="12px">Sđt:</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#222">{props?.phone}</TextStyle>
        </FlexBox>
      </FlexBox>

      <FlexBox>
        <TextStyle color="#757575" fontSize="12px">Email:</TextStyle>
        <SpaceStyle padding="3px" />
        <TextStyle color="#222">{props?.email}</TextStyle>
      </FlexBox>

      <FlexBox width="100%" justifyContent="space-between">
        <FlexBox>
          <TextStyle color="#757575" fontSize="12px">Giá yêu cầu:</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#ee4d2d">{props?.price}</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#222" fontSize="12px">VND</TextStyle>
        </FlexBox>

        <FlexBox>
          <TextStyle color="#757575" fontSize="12px">Thời gian làm:</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#ee4d2d">{props?.timeComplete}</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#222" fontSize="12px">ngày</TextStyle>
        </FlexBox>
      </FlexBox>
    </FrameEstimateItem>
  )
}

const ProductCreate = () => {

  const option = [
    {
      id: EProfileSortBy.INPROGRESS,
      name: 'Đang được làm'
    },
    {
      id: EProfileSortBy.OPEN,
      name: 'Mới'
    },
    {
      id: EProfileSortBy.RESOLVE,
      name: 'Hoàn thành'
    }
  ];

  const [recall, setRecall] = useState<boolean>(false);

  const [params, setParams] = useState<IParam>({ page: 1, pageSize: 16, sortBy: EProfileSortBy.INPROGRESS })

  const [products, setProducts] = useState<IProductData[]>([]);

  const userReceiveProduct = useRef<IUserEstimate[]>([])

  const [visible, setVisible] = useState<boolean>(false);

  const [statistical, setStatistical] = useState<{ count: Number, totalMoney: number }>({ count: 0, totalMoney: 0 })

  const updateParam = (value: any) => {
    setParams({ ...params, ...value });
  };


  const getProduct = async () => {
    sendGet('products/get-list-product-created', params)
      .then((res) => {
        setProducts(res?.data);
      })
      .catch((error) => {
        console.log(error);

      })
  };

  const statisticalFc = async () => {
    sendGet('products/statistical')
      .then((res) => {
        setStatistical(res?.data);
      })
  };

  const getListEstimateProduct = async (productId: string) => {
    sendGet(`estimates/list/${productId}`)
      .then(res => {
        const realData = res?.data?.map((item: any) => ({
          ...item,
          username: item?.user?.username,
          phone: item?.user?.phone,
          email: item?.iser?.email,
        }));
        userReceiveProduct.current = realData;
        setVisible(true);
      })
      .catch(() => {
        message.error('Lỗi hệ thống!')
      })
  }

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, recall]);

  useEffect(() => {
    statisticalFc();
  }, [recall]);


  const showModalEstimate = (productId: string) => {
    if (params?.sortBy === EProfileSortBy.OPEN) {
      getListEstimateProduct(productId);
      return;
    }

    const productResolve = async () => {
      await sendPost('products/update-status', { status: EStatusProduct.RESOLVE, productId });
      setRecall(!recall)
    }

    Modal.confirm({ content: 'Hãy nhấn "Xác nhận" để xác nhấn sản phẩm đã được hoàn thành!', onOk: productResolve })
  };


  const chooseUserEstimate = async (estimateId: string, productId: string) => {
    await sendPost('estimates/accept-estimate', { estimateId })
    await sendPost('products/update-status', { status: EStatusProduct.INPROGRESS, productId });
    setRecall(!recall);
    setVisible(false);
  }



  return (
    <ProductReceiveStyle>
      <Modal bodyStyle={{ padding: 5, maxHeight: 480, overflowY: 'auto' }} onCancel={() => setVisible(false)} footer={<></>} visible={visible} title="Danh sách người nhận làm sản phẩm">
        {userReceiveProduct.current?.map((item: IUserEstimate) => (<EstimateItemStyle>
          <EstimateItem {...item} />
          <ButtonApprove onClick={() => chooseUserEstimate(item?.id, item.productId)}>Duyệt</ButtonApprove>
        </EstimateItemStyle>))}
      </Modal>
      <FilterHome option={option} defaultValue={EProfileSortBy.INPROGRESS} onChangeCategory={updateParam} />

      <TextStyle>Thống kê sản phẩm</TextStyle>


      <FlexBox justifyContent="space-between">
        <FlexBox>
          <TextStyle color="#757575">Tổng sản phẩm: </TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#08f" fontSize="16px">{statistical?.count}</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#757575">sản phẩm</TextStyle>
        </FlexBox>

        <FlexBox>
          <TextStyle color="#757575">Tổng doanh thu: </TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#08f" fontSize="16px">{!statistical?.totalMoney ? 0 : statistical.totalMoney.toLocaleString('es-US')}</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#757575">VND</TextStyle>
        </FlexBox>
      </FlexBox>

      <SpaceStyle padding="10px" />

      <Row gutter={[15, 10]}>
        {products?.map((item: IProductData) => (<Col style={{ position: 'relative' }} span={6}>
          <ProductItem isShowStatus={true} data={item} />
          {params?.sortBy !== EProfileSortBy.RESOLVE && <ButtonEstimate
            onClick={() => showModalEstimate(item?.id)}>{params?.sortBy === EProfileSortBy.OPEN ? 'Estimate' : 'Xác nhận hoàn thành'}</ButtonEstimate>}
        </Col>))}
      </Row>

    </ProductReceiveStyle>
  )

}

export default ProductCreate;