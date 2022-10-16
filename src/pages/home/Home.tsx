import { SpaceStyle } from "component/common/commonStyle";
import ContentCustom from "component/Content/Content";
import Sidebar from "./SideBar";
import { ContentPageStyle, PaginationStyle, ProductContentStyle, ProductStyle, SearchButtonStyle } from "./commonStyle";
import FilterHome from "component/home/Filter";
import ProductItem from "component/home/ProductItem";
import { Pagination } from "antd";
import { sendGet } from "axios/fetch";
import { useEffect, useState, useRef } from "react";

enum ESortBy {
  HIGHT_TO_LOW = 1,
  LOW_TO_HIGHT,
  NEW,
}
interface IParams {
  page: number;
  pageSize?: number;
  sortBy: ESortBy;
  name?: string;
};

export enum ESortType {
  HIGHT_TO_LOW = 1,
  LOW_TO_HIGHT,
  NEW,
};

export enum EStatusProduct {
  OPEN = 1,
  INPROGRESS,
  RESOLVE,
}

export interface IProductData {
  id: string;
  name: string;
  category: {
    id: string;
    name: string;
  },
  priceStart: number;
  priceEnd: number;
  timeComplete: number;
  image: string;
  description?: string;
  userId?: string;
  user?: {
    id: string;
    username: string;
    phone: string;
    email: string;
  },
  status: EStatusProduct;
}
const HomePage = () => {

  const option = [
    {
      id: ESortType.NEW,
      name: 'Mới nhất'
    },
    {
      id: ESortType.HIGHT_TO_LOW,
      name: 'Giá từ cao tới thấp'
    },
    {
      id: ESortType.LOW_TO_HIGHT,
      name: 'Giá từ thấp tới cao'
    }
  ]


  const [params, setParams] = useState<IParams>({ page: 1, pageSize: 16, sortBy: ESortBy.NEW });

  const [products, setProducts] = useState<IProductData[]>([]);

  const totalRecord = useRef<number>(0)

  const getProducts = async () => {
    const result = await sendGet('products', params);
    if (result?.data) {
      totalRecord.current = result?.total;
      setProducts(result?.data);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const updateParam = (value: any) => {
    setParams({ ...params, ...value });
  };



  return (
    <>
      <SpaceStyle padding="20px" />
      <ContentCustom spaceContentStyle={{ order: -1 }} sideBarStyle={{ order: -2 }} sibar={<Sidebar onSetCategorySelected={(value: any[]) => {

        updateParam({ categoryId: value?.join(',') })
      }} />}>
        <ContentPageStyle>
          <SearchButtonStyle onChange={(e: any) => {
            const value = e?.target?.value as string;
            updateParam({ name: value });
          }} placeholder="Nhập tên sản phẩm..." />

          <SpaceStyle padding=" 10px" />
          <FilterHome defaultValue={ESortType.NEW} option={option} onChangeCategory={updateParam} />

          <ProductContentStyle>
            {products?.map((item: IProductData) => (
              <ProductStyle>
                <ProductItem data={item} />
              </ProductStyle>
            ))}
          </ProductContentStyle>

          <PaginationStyle>
            <Pagination onChange={(page: number) => {
              updateParam({ page })
            }} current={params?.page} total={totalRecord.current} />
          </PaginationStyle>


        </ContentPageStyle>

      </ContentCustom>
    </>

  )
}


export default HomePage;