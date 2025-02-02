import UserSidebar from "@/app/templates/Sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { FaChartColumn, FaArrowRightFromBracket } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { CiSquareAlert } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { TbPlugConnected, TbSettings } from "react-icons/tb";
import { IoIosFlash } from "react-icons/io"; // Menu items

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="!bg-[#101928]  ">
        <SidebarGroup className="">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col justify-between w-full h-screen overflow-hidden">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <Image src="/logoo.png" height={100} width={100} alt="Logo" />
              </div>

              {/* Main Navigation Links */}
              <main className="flex flex-col gap-2 flex-grow overflow-y-auto">
                <UserSidebar href="/" icon={<GoHome />} label="DashBoard" />
                <UserSidebar
                  href="/transaction"
                  icon={<FaChartColumn />}
                  label="Transactions"
                />
                <UserSidebar href="/user" icon={<FaUsers />} label="Users" />
                <UserSidebar
                  href="/report"
                  icon={<CiSquareAlert />}
                  label="Reports"
                />
                <UserSidebar
                  href="/admin"
                  icon={<GrUserManager />}
                  label="Admins"
                />
                <UserSidebar
                  href="/service"
                  icon={<TbPlugConnected />}
                  label="Services"
                />
                <UserSidebar
                  href="/rates"
                  icon={<IoIosFlash />}
                  label="Rates"
                />
              </main>

              {/* Bottom Section (Settings and User Profile) */}
              <div className="flex flex-col gap-5 flex-shrink-0">
                <UserSidebar
                  href="/setting"
                  icon={<TbSettings />}
                  label="Settings"
                />

                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="bg-white rounded-full">
                      <Image
                        src="/girl.png"
                        height={20}
                        width={30}
                        alt="User"
                        className="rounded-full"
                      />
                    </div>
                    <p>Jeffrey</p>
                  </div>
                  <FaArrowRightFromBracket />
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
