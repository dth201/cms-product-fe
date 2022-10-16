import { Image } from "antd";
import { FlexBox, SpaceStyle, TextStyle } from "component/common/commonStyle";
import { IMAGE_URL } from "config";
import { EStatusProduct, IProductData } from "pages/home/Home";
import { useNavigate } from "react-router-dom";
import { ProductInfoStyle, ProductItemStyle } from "./commonStyle";


interface IProps {
  data: IProductData;
  isShowStatus?: boolean;
}
const ProductItem: React.FC<IProps> = ({ data, isShowStatus = false }) => {


  const navigate = useNavigate();

  return (
    <ProductItemStyle>
      <Image src={IMAGE_URL + data?.image} />
      <ProductInfoStyle>
        <TextStyle fontSize="12px" onClick={() => navigate(`/detail/${data?.id}`)} hoverCursor="pointer" limitLine="1" color="rgba(0,0,0,.87)" fontWeight="400">{data?.name}</TextStyle>

        <SpaceStyle padding="5px" />

        <FlexBox>
          <TextStyle fontSize="10px" color="#ee4d2d">₫</TextStyle>
          <TextStyle fontSize="16px" color="#ee4d2d">{data?.priceStart.toLocaleString('en-IE')}</TextStyle>
          <TextStyle fontWright="500" fontSize="14px" color="#ee4d2d" margin="3px">-</TextStyle>
          <TextStyle fontSize="10px" color="#ee4d2d">₫</TextStyle>
          <TextStyle fontSize="16px" color="#ee4d2d">{data?.priceEnd.toLocaleString('en-IE')}</TextStyle>
        </FlexBox>

        <FlexBox alignItem="baseline">
          <TextStyle fontSize="11px" limitLine="1" color="rgba(0,0,0,.87)" fontWeight="400">Thời gian:</TextStyle>
          <SpaceStyle padding="2px" />
          <TextStyle fontSize="14px" color="#ee4d2d">{data?.timeComplete}</TextStyle>
          <SpaceStyle padding="2px" />
          <TextStyle fontSize="11px" limitLine="1" color="rgba(0,0,0,.87)" fontWeight="400">ngày</TextStyle>
        </FlexBox>
        <SpaceStyle padding="3px" />

        <FlexBox width="100%" justifyContent="space-between">
          <TextStyle color="rgba(0,0,0,.65)" fontWeight="400">{data?.category?.name}</TextStyle>
          {isShowStatus && <TextStyle color={data?.status === EStatusProduct.OPEN ? '#ed8077' : data?.status === EStatusProduct.INPROGRESS ? '#4488c5' : '#5eb5a6'}>
            {data?.status === EStatusProduct.OPEN ? 'OPEN' : data?.status === EStatusProduct.INPROGRESS ? 'In Progress' : 'Resolved'}
          </TextStyle>}
        </FlexBox>


      </ProductInfoStyle>
    </ProductItemStyle>
  )

}

export default ProductItem;