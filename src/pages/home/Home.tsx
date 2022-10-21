import { SpaceStyle } from "component/common/commonStyle";
import ContentCustom from "component/Content/Content";
import { CategoryTab, ContentPageStyle, CreateProduct, FrameCreateProduct, PaginationStyle, ProductContentStyle, ProductMain, ProductStyle } from "./commonStyle";
import FilterHome from "component/home/Filter";
import ProductItem from "component/home/ProductItem";
import { Pagination } from "antd";
import { sendGet } from "axios/fetch";
import { useEffect, useState, useRef } from "react";
import CaroselHome from "component/home/CaroselHome";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export enum ESortBy {
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

interface ICategoriesData {
  id: string;
  name: string;
  created_at?: string;
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
};

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


const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname: any, params?: any) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
};

const HomePage = () => {

  const navigate = useNavigateSearch();
  const [searchParams] = useSearchParams();


  const getQuery = () => {
    return {
      categoryId: searchParams.get('categoryId') || undefined,
      page: searchParams.get('page') || 1,
      pageSize: searchParams.get('pageSize') || 16,
      sortBy: searchParams.get('sortBy') || ESortBy.NEW,
      name: searchParams.get('name') || '',
    }
  };

  const location = useLocation();

  useEffect(() => {
    const newParams = getQuery() as IParams;

    updateParam(newParams);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])


  const [params, setParams] = useState<IParams>(getQuery() as any);

  const [products, setProducts] = useState<IProductData[]>([]);

  const [tabs, setTabs] = useState<{ label: string, key: string }[]>([{
    label: `Tất cả`,
    key: '0',
  }]);

  const [currentTab, setCurrentTab] = useState<string>(searchParams.get('categoryId') || '0')

  const totalRecord = useRef<number>(0);

  const getListCategory = async () => {
    const result = await sendGet('categories');

    if (result?.data) {
      const categoriesTab = result?.data?.map((item: ICategoriesData) => ({ label: item.name, key: item.id }));
      setTabs([...tabs, ...categoriesTab]);
    }
  }

  useEffect(() => {
    getListCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const changeTab = (value: string) => {
    value === '0' && navigate('/home');
    value !== '0' && navigate('/home', { categoryId: [value] });
    // updateParam({ categoryId: value === '0' ? undefined : [value] });
    setCurrentTab(value);
  };

  return (
    <>
      <CategoryTab activeKey={currentTab} items={tabs} onChange={changeTab}></CategoryTab>
      <ContentCustom spaceContentStyle={{ order: -1 }} sideBarStyle={{ order: -2 }} >
        <ContentPageStyle>

          <FrameCreateProduct>

            <CreateProduct>
              <p>Get matched with sellers for your project.</p>
              <button onClick={() => navigate('/create')}>Đăng sản phẩm</button>
            </CreateProduct>
            <SpaceStyle padding="10px" />
            <CaroselHome />
          </FrameCreateProduct>



          <SpaceStyle padding=" 10px" />
          <FilterHome defaultValue={ESortType.NEW} option={option} onChangeCategory={updateParam} />

          <ProductContentStyle>
            {products?.map((item: IProductData) => (
              <ProductStyle>
                <ProductMain>
                  <ProductItem data={item} />
                </ProductMain>

              </ProductStyle>
            ))}
          </ProductContentStyle>

          <SpaceStyle padding="20px" />

          <PaginationStyle>
            <Pagination onChange={(page: number) => {
              updateParam({ page })
            }} current={params?.page} total={totalRecord.current} />
          </PaginationStyle>

          <SpaceStyle padding="20px" />


        </ContentPageStyle>

      </ContentCustom>
    </>

  )
}


export default HomePage;