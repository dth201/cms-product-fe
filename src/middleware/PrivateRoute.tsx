import PropTypes from 'prop-types';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { IAuthStore } from '../store/type';


const PrivateRoute = ({ component: Component, Layout, ...rest }: { component: any, Layout: any }) => {

  const { isLogin } = useSelector((state: any) => state?.auth) as IAuthStore;

  if (!true) {
    return <Route {...rest} element={<Navigate to="/login" />} />
  }

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

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default PrivateRoute;