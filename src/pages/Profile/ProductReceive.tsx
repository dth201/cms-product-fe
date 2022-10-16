import { FlexBox, SpaceStyle, TextStyle } from "component/common/commonStyle";
import FilterHome from "component/home/Filter";
import { IProductData } from "pages/home/Home";
import { ProductReceiveStyle } from "./profileStyle";
import { useEffect, useState } from "react";
import { sendGet } from "axios/fetch";
import { Col, Row } from "antd";
import ProductItem from "component/home/ProductItem";

interface IParam {
  page: number;
  pageSize?: number;
  sortBy: EProductReceived;
}

enum EProductReceived {
  WAIT = 1,
  IN_PROGRESS = 2,
  RESOLVE,
}

const ProductReceive = () => {

  const option = [
    {
      id: EProductReceived.WAIT,
      name: 'Chờ duyệt'
    },
    {
      id: EProductReceived.IN_PROGRESS,
      name: 'Đang làm'
    },
    {
      id: EProductReceived.RESOLVE,
      name: 'Đã hoàn thành'
    }
  ]

  const [params, setParams] = useState<IParam>({ page: 1, pageSize: 16, sortBy: EProductReceived.WAIT })

  const [products, setProducts] = useState<IProductData[]>([]);

  const [statistical, setStatistical] = useState<{ count: Number, countResolve: number }>({ count: 0, countResolve: 0 })

  const updateParam = (value: any) => {
    setParams({ ...params, ...value });
  };


  const getProduct = async () => {
    sendGet('estimates/get-list-product-estimated', params)
      .then((res) => {

        setProducts(res?.data?.map((item: any) => item?.product))
      })
      .catch((error) => {
        console.log(error);

      })
  };

  const statisticalFc = async () => {
    sendGet('estimates/statistical/product-receive')
      .then((res) => {
        setStatistical(res?.data);
      })
  }

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    statisticalFc();
  }, [])


  return (
    <ProductReceiveStyle>
      <FilterHome option={option} defaultValue={EProductReceived.WAIT} onChangeCategory={updateParam} />

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
          <TextStyle color="#757575">Tổng sản phẩm đã hoàn thành: </TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#08f" fontSize="16px">{statistical.countResolve}</TextStyle>
          <SpaceStyle padding="3px" />
          <TextStyle color="#757575">sản phẩm</TextStyle>
        </FlexBox>
      </FlexBox>

      <SpaceStyle padding="10px" />

      <Row gutter={[15, 10]}>
        {products?.map((item: IProductData) => (<Col span={6}>
          <ProductItem isShowStatus={true} data={item} />
        </Col>))}
      </Row>
    </ProductReceiveStyle>
  )

}

export default ProductReceive;