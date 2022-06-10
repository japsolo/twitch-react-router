import { Outlet } from 'react-router-dom';

import Navbar from "./Navbar";

const Layout = () => {
   return (
      <div>
         <h1>Welcome to React Router Demo</h1>
         <Navbar />
         <Outlet />
      </div>
   );
}

export default Layout;
