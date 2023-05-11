import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SideBarLogo from "./SideBarLogo";
import SideBarItem from "./SideBarItem";
import SideBarTweetButton from "./SideBarTweetButton";

const SideBar = () => {
  const items = [
    { label: "Home", href: "/", icon: BsHouseFill },
    { label: "Notifications", href: "/notification", icon: BsBellFill },
    { label: "Profile", href: "/users/123", icon: FaUser },
  ];
  return (
    <div className="flex flex-col items-end">
      <div className="space-y-2 lg:-[230px]">
        <SideBarLogo />
        {items.map((item) => (
          <SideBarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
        <SideBarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
        <SideBarTweetButton />
      </div>
    </div>
  );
};

export default SideBar;
