import { SpaceStyle } from "component/common/commonStyle";
import { BoxParentCheck, GroupSearchStyle, CheckBoxStyle, BocChildrenCheck } from "./commonStyle";
import { CaretDownOutlined } from '@ant-design/icons';
import { useState, useRef, useEffect } from 'react';
import { CheckboxChangeEvent } from "antd/lib/checkbox";

interface ICheck {
  id: string | number;
  name: string;
  checked?: boolean;
}
interface IProps {
  parent: ICheck;
  childrenCheck?: ICheck[];
  onSelectCategory?: (value: any) => void;
}

const GroupSearch: React.FC<IProps> = (props) => {

  const [routeIcon, setRouteIcon] = useState<boolean>(false);

  const [checkedId, setCheckedId] = useState<any[]>([]);

  const [parentCheck, setParentCheck] = useState<boolean>(false);

  const childrenCheckRef = useRef<ICheck[]>([]);

  const changeCheckChild = (e: CheckboxChangeEvent, item: ICheck) => {
    item.checked = e.target.checked;
  };

  useEffect(() => {
    if (props?.childrenCheck) {
      childrenCheckRef.current = props?.childrenCheck;
    }
  }, [props?.childrenCheck]);

  useEffect(() => {
    if (parentCheck) setCheckedId([...checkedId, props?.parent?.id]);

    else setCheckedId((data: any) => data?.filter((item: any) => (item !== props?.parent?.id)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentCheck]);


  useEffect(() => {
    props?.onSelectCategory && props?.onSelectCategory(checkedId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedId])

  return (
    <GroupSearchStyle>
      <BoxParentCheck routeIcon={routeIcon}>
        <CheckBoxStyle value={parentCheck} onChange={(e: CheckboxChangeEvent) => {
          const statusCheck = e.target.checked;
          setParentCheck(statusCheck);
          setRouteIcon(statusCheck);
        }}>{props.parent.name}</CheckBoxStyle>
        <SpaceStyle padding="5px" />
        {childrenCheckRef.current.length > 0 && <CaretDownOutlined onClick={() => setRouteIcon(!routeIcon)} color="red" />}
      </BoxParentCheck>

      {(routeIcon || parentCheck) && <BocChildrenCheck>
        {(childrenCheckRef.current || []).map((item: ICheck) => (<CheckBoxStyle onChange={(e: CheckboxChangeEvent) => {
          changeCheckChild(e, item);
          const value = e.target.checked as boolean;

          if (value) setCheckedId([...checkedId, item?.id]);

          else setCheckedId((data: any) => data?.filter((_item: any) => !(_item !== item?.id)));

        }} value={item?.checked} key={item.id}>{item.name}</CheckBoxStyle>))}
      </BocChildrenCheck>}

    </GroupSearchStyle>
  )
}

export default GroupSearch;