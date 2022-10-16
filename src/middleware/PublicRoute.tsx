import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute: React.FC<any> = ({ component: Component, Layout, ...rest }: { component: any, Layout: any }) => {

  return (
    <Route
      {...rest}
      element={
        <Layout>
          <Component />
        </Layout>
      }
    />

  )
};

PublicRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default PublicRoute;