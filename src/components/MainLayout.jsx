import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitile';
const MainLayout = () => {
  return (
    <div>
      HI THEREE!!
      <AppTitle />
      <Navs />
      <Outlet />
    </div>
  );
};
export default MainLayout;
