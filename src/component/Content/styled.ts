import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

const ContentWrapper = styled.div<any>`
  width: 100%;
  background-color: ${(props) => (props?.style?.backGround ? props?.style?.backGround : 'white')};
  padding: ${(props) => (props?.style?.padding ? props?.style?.padding : 'unset')};
  .banner-home {
    height: 300px;
  }
`;

const MainContainerStyle = styled.div<any>`
  min-width: ${isMobile ? '100%' : '1140px'};
  margin: auto;
  padding: ${(props) => (isMobile ? props?.padding || '0 20px' : props?.padding || 'unset')};
  width: ${(props) => (isMobile ? '100%' : props?.width || props?.defaultWidth)};
  .parent-box {
    justify-content: space-between;
  }
`;

const BodyStyle = styled.div<any>`
  width: ${(props) => (isMobile || !props?.isSidebar ? '100%' : 'calc(100% - 293px)')};
  background: ${(props) => props?.style?.backGround || 'unset'};
  z-index: ${(props) => props?.style?.zIndex || 'unset'};
`;

const SideBarStyle = styled.div<any>`
  width: ${isMobile ? '100%' : '270px'};
  order: ${(props) => props?.order ?? 'unset'};
`;

const MainContainerBanner = styled.div`
  width: 100%;
`;

const SpaceContentStyle = styled.div<any>`
  padding: ${(props) => props?.padding || '0 11.5px'};
  order: ${(props) => props?.order ?? 'unset'};
`;

export { MainContainerBanner, MainContainerStyle, BodyStyle, SideBarStyle, SpaceContentStyle };

export default ContentWrapper;
