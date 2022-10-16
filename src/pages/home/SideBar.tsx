import { Avatar } from "antd";
import { ContentSideBarStyle, HeaderSideBarStyle, SidebarStyle } from "./commonStyle";
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { SpaceStyle, TextStyle } from "component/common/commonStyle";
import GroupSearch from "component/home/GroupsSearch";
import { sendGet } from "axios/fetch";
import { useEffect, useState, useRef } from 'react';


interface IData {
  id: string;
  name: string;
}
interface ICategoriesData {
  id: string;
  name: string;
  created_at?: string;
  subcategories?: IData[]
}

interface IProps {
  onSetCategorySelected?: (value: any) => void;
}
const Sidebar: React.FC<IProps> = (props) => {

  const [categories, setCategories] = useState<ICategoriesData[]>([]);

  const objectCategory = useRef<any>({});

  const getListCategory = async () => {
    const result = await sendGet('categories');

    if (result?.data) {
      setCategories(result?.data);
    }
  }

  useEffect(() => {
    getListCategory();
  }, []);

  const selectCategory = (value: any, item: ICategoriesData) => {
    objectCategory.current[item?.id] = value;

    const categoryIdSelected = Object.values(objectCategory.current)?.reduce((newArrCategory: any[], item: any) => ([...newArrCategory, ...item]), []);
    props?.onSetCategorySelected && props.onSetCategorySelected(categoryIdSelected);
  }


  return (
    <SidebarStyle>
      <HeaderSideBarStyle>
        <Avatar icon={<MenuUnfoldOutlined />} />
        <SpaceStyle padding="5px" />
        <TextStyle color="#ccc">Danh mục</TextStyle>
      </HeaderSideBarStyle>
      <ContentSideBarStyle>
        {categories?.map((item: ICategoriesData) => (<GroupSearch onSelectCategory={(value: any) => selectCategory(value, item)} parent={item} childrenCheck={item?.subcategories} />))}
      </ContentSideBarStyle>
    </SidebarStyle>
  )
}

export default Sidebar;