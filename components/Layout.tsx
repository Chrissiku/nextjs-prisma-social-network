import React from "react";
import SideBar from "./layout/SideBar";
import FollowBar from "./layout/FollowBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <div className="col-span-1 h-full pr-4 md:pr-6">
            <SideBar />
          </div>
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
          <div className="px-6 py-4 hidden lg:block">
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
