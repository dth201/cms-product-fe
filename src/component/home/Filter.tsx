import { Select } from "antd";
import { SpaceStyle, TextStyle } from "component/common/commonStyle";
import { FilterHomeStyle } from "./commonStyle";


const { Option } = Select;

interface IProps {
  onChangeCategory?: (value: any) => void;
  option?: any;
  defaultValue?: any;
}

const FilterHome: React.FC<IProps> = ({ onChangeCategory, option = [], defaultValue }) => {


  return (
    <FilterHomeStyle>
      <TextStyle color="rgb(85, 85, 85)">Sắp xếp theo</TextStyle>
      <SpaceStyle padding="10px" />

      <Select defaultValue={defaultValue} style={{ width: 180, borderRadius: 5 }} onChange={(value: any) => {
        onChangeCategory && onChangeCategory({ sortBy: value });
      }}>
        {option?.map((item: any) => (<Option value={item?.id}>{item?.name}</Option>))}
      </Select>
    </FilterHomeStyle>
  )
}

export default FilterHome;