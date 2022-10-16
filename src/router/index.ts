import React from 'react';
const Home = React.lazy(() => import('pages/home/Home'));
const Detail = React.lazy(() => import('pages/Detail/DetailProduct'));
const Profile = React.lazy(() => import('pages/Profile/Profile'));
const Create = React.lazy(() => import('pages/Create/Create'))
export interface RouterItemInterface {
  desktop: any;
  path: string;
  exact?: boolean;
  layout?: any;
  mobile?: any;
  private: boolean;
}

export const routers: RouterItemInterface[] = [
  {
    path: 'home',
    private: true,
    desktop: Home,
    layout: null,
  },
  {
    path: 'detail/:idProduct',
    private: true,
    desktop: Detail,
    layout: null,
  },
  {
    path: 'profile',
    private: true,
    desktop: Profile,
    layout: null,
  },
  {
    path: 'create',
    private: true,
    desktop: Create,
    layout: null,
  }
]