"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface UserSidebarProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const UserSidebar: React.FC<UserSidebarProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 p-2 text-[#F0F2F5] hover:bg-[#1D2739] ${
        isActive ? "bg-[#1D2739]" : ""
      }`}
    >
      <span
        className={`text-xl hover:text-[#41E755] ${
          isActive ? "text-[#41E755]" : ""
        }`}
      >
        {icon}
      </span>
      <p>{label}</p>
    </Link>
  );
};

export default UserSidebar;
