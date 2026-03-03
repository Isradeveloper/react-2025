import { Outlet } from 'react-router';
import { CustomHeader } from '../components/CustomHeader';
import { CustomFooter } from '../components/CustomFooter';

const ShopLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-background">
      <CustomHeader />
      <main>
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};

export default ShopLayout;
