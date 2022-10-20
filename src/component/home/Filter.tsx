import { Select } from "antd";
import { SpaceStyle, TextStyle } from "component/common/commonStyle";
import { FilterHomeStyle, SelectFilter } from "./commonStyle";


const { Option } = Select;

interface IProps {
  onChangeCategory?: (value: any) => void;
  option?: any;
  defaultValue?: any;
}

const FilterHome: React.FC<IProps> = ({ onChangeCategory, option = [], defaultValue }) => {


  return (
    <FilterHomeStyle>
      <TextStyle margin="0 0 0 auto" color="#74767e" fontWeight="500">Sắp xếp theo</TextStyle>
      <SpaceStyle padding="10px" />

      <SelectFilter defaultValue={defaultValue} style={{ width: 180, borderRadius: 5 }} onChange={(value: any) => {
        onChangeCategory && onChangeCategory({ sortBy: value });
      }}>
        {option?.map((item: any) => (<Option value={item?.id}>{item?.name}</Option>))}
      </SelectFilter>
    </FilterHomeStyle>
  )
}

export default FilterHome;