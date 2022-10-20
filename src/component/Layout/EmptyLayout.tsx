import React from 'react';
import { Layout } from 'antd';
import HeaderCustom from './Header/HeaderCustom';

const { Content } = Layout;
const EmptyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ background: 'white' }}>
      <HeaderCustom />
      <Content style={{ background: 'white' }}>{children}</Content>
    </Layout>
  );
};

export default EmptyLayout;
