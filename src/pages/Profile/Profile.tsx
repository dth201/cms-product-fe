import { Tabs } from "antd";
import { SpaceStyle } from "component/common/commonStyle";
import ContentCustom from "component/Content/Content";
import ProductCreate from "./ProductCreate";
import ProductReceive from "./ProductReceive";

const ProfilePage = () => {

  return (
    <ContentCustom>
      <SpaceStyle padding="20px 0 0 0" />
      <Tabs defaultActiveKey="1" tabPosition={'left'}>
        <Tabs.TabPane tab="Các sản phẩm đã tạo" key="1">
          <ProductCreate />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Các sản phẩm đã nhận" key="2">
          <ProductReceive />
        </Tabs.TabPane>
      </Tabs>
    </ContentCustom>
  )
}

export default ProfilePage;