import { Avatar, Menu } from "antd";
import { SpaceStyle, TextStyle } from "component/common/commonStyle";
import { useNavigate } from "react-router-dom";
import { DropDownStyle, HeaderCustomStyle, InfoStyle } from "./headerCustomStyle";
import { useEffect } from 'react';
import { sendGet } from "axios/fetch";
import { useDispatch, useSelector } from "react-redux";
import { storeSetUserInfo } from "store/auth";


const HeaderCustom = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state?.auth);

  const getUserInfo = async () => {
    const result = await sendGet('user');
    if (result?.data) {
      dispatch(storeSetUserInfo(result?.data))
    }
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log();


  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <TextStyle onClick={() => navigate('/profile')} color="#ccc">Trang cá nhân</TextStyle>
          ),
        },
        {
          key: '2',
          label: (
            <TextStyle onClick={() => {
              localStorage.removeItem('token');
              navigate('/login')
            }} color="#ccc">Đăng xuất</TextStyle>
          ),
        },
      ]}
    />
  );


  return (
    <HeaderCustomStyle>
      <TextStyle onClick={() => navigate('/home')} style={{ cursor: 'pointer' }} fontWeight="600">CMS Product</TextStyle>
      <TextStyle onClick={() => navigate('/create')} hoverCursor="pointer" margin="0 0 0 auto">Tạo sản phẩm</TextStyle>

      <SpaceStyle padding="5px" />
      <DropDownStyle overlay={menu}>

        <InfoStyle>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <TextStyle>{userInfo?.username}</TextStyle>
        </InfoStyle>

      </DropDownStyle>


    </HeaderCustomStyle>
  )
}

export default HeaderCustom;