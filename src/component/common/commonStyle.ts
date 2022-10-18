import styled from 'styled-components'
import { Image } from 'antd'

const TextStyle = styled.div<any>`
  color: ${(props) => props?.color || 'white'};
  padding: ${(props) => props?.padding || '0'};
  font-size: ${(props) => props?.fontSize || '14px'};
  font-weight: ${(props) => props?.fontWeight || '400'};
  background-color: ${(props) => props?.backgroundColor || 'unset'};
  border-radius: ${(props) => props?.borderRadius || 'unset'};
  width: ${(props) => props?.width || 'unset'};
  height: ${(props) => props?.height || 'unset'};
  margin: ${(props) => props?.margin || 'unset'};
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props?.limitLine || 'unset'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${(props) => props?.textAlign || 'unset'};
  :hover {
    text-decoration: ${(props) => props?.hoverTextDecoration || 'unset'};
    cursor: ${(props) => props?.hoverCursor || 'unset'};
    color: ${(props) => props?.colorHover || props?.color || 'white'};
  }
`

const IconStyle = styled(Image)``

const SpaceStyle = styled.div<any>`
  padding: ${(props) => props?.padding || '0'};
  width: ${(props) => props?.width || 'unset'};
  flex: ${(props) => props?.flex || 'unset'};
`

const DividerStyle = styled.div<any>`
  padding: ${(props) => props?.padding || '0'};
  width: ${(props) => props?.width || 'unset'};
  height: ${(props) => props?.height || 'unset'};
`;


const FlexBox = styled.div<any>`
display: flex;
align-items: ${(props) => props?.alignItem || 'center'};
justify-content: ${(props) => props?.justifyContent || 'unset'};
width: ${(props) => props?.width || 'unset'};
flex-direction: ${(props) => props?.flexDirection || 'column'};
`

export { TextStyle, IconStyle, SpaceStyle, DividerStyle, FlexBox }
