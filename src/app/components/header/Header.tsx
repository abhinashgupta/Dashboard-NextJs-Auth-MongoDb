"use client"
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";




import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";

const Header = ({ handleHam, openHam }: any) => {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const logout = async () => {
      try {
        await axios.get("/api/user/logout");
        toast.success("Logout successful");
        router.push("/login");
      } catch (error) {
        console.error("Logout error:", error);
        toast.error("Failed to logout");
      }
  };
  
  return (
    <div className="h-[91px] w-[100vw] flex justify-between items-center border p-6">
      <div className="flex relative gap-4 items-center justify-center ">
        <div className="">
          <button onClick={handleHam} className="text-xl mx-2">
            {openHam ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="">
          <Input placeholder="Search..." className="rounded hidden sm:flex" />
          <FaSearch className="sm:absolute sm:right-2 sm:top-2 cursor-pointer text-gray-500" />
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <div className="">
          <FaBell className="text-2xl text-gray-500" />
          <div className="bg-red-500 relative">
            <span className="w-2 h-2 bg-red-600 rounded-full absolute right-0 -top-8 animate-pulse"></span>
          </div>
        </div>
        <FaEnvelope className="text-2xl text-gray-600" />
        <div>
          {/* Profile Icon */}
          <div className="flex items-center relative ml-4">
            <div className="mr-4">
              <Image
                src="/profilePic.avif"
                alt="Profile"
                width={50}
                height={50}
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm" style={{ color: "#262c53" }}></span>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger> Admira John</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>
                        <button onClick={logout}>Logout</button>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
