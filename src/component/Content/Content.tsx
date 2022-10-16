import React from 'react';
import { Row } from 'antd';
import ContentWrapper, {
  BodyStyle,
  MainContainerBanner,
  MainContainerStyle,
  SideBarStyle,
  SpaceContentStyle,
} from './styled';

interface IMainContainerStyle {
  width?: string;
  padding?: string;
}
interface IStyle {
  backGround?: string;
  padding?: string;
}

interface ISideBarStyle {
  order?: number;
}

interface IBodyStyle {
  order?: number;
  backGround?: string;
  zIndex?: number;
}

interface ISpaceContentStyle {
  order?: number;
  padding?: string;
  borderLeft?: string;
}

interface Props {
  children?: React.ReactNode;
  sibar?: React.ReactNode;
  showBanner?: boolean;
  banner?: any;
  className?: string;
  style?: IStyle;
  mainContainerStyle?: IMainContainerStyle;
  sideBarStyle?: ISideBarStyle;
  spaceContentStyle?: ISpaceContentStyle;
  bodyStyle?: IBodyStyle;
}
const ContentCustom: React.FC<Props> = ({ children, sibar, showBanner = false, banner, className, ...props }) => {
  const defaultWidth = '1140px';

  return (
    <ContentWrapper {...props} className={className || ''}>
      {showBanner && <MainContainerBanner>{banner}</MainContainerBanner>}

      <MainContainerStyle isSidebar={!!sibar} {...props?.mainContainerStyle} defaultWidth={defaultWidth}>
        <Row className="parent-box">
          <BodyStyle style={props?.bodyStyle} isSidebar={!!sibar}>
            {children}
          </BodyStyle>
          <SpaceContentStyle style={{ ...props.spaceContentStyle }} />
          {sibar && <SideBarStyle {...props.sideBarStyle}>{sibar}</SideBarStyle>}
        </Row>
      </MainContainerStyle>
    </ContentWrapper>
  );
};

export default ContentCustom;
