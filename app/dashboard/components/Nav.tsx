"use client";

import React from "react";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaBars } from "react-icons/fa";

interface NavProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isMobile: boolean;
}
export const Nav = ({ isMobile, sidebarOpen, setSidebarOpen }: NavProps) => {
  return (
    <nav
      id="navbar"
      className="fixed left-0 top-0 z-30 w-full transition-all"
      style={{
        transform: `translateX(${sidebarOpen && !isMobile ? "260px" : "0"})`,
        width: sidebarOpen && !isMobile ? "calc(100% - 260px)" : "100%",
      }}
    >
      <div className="container p-3">
        <Card>
          <CardBody>
            <div className="flex justify-between">
              <Button
                isIconOnly
                startContent={<FaBars className="text-xl" />}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="border-none"
                variant="ghost"
              ></Button>
              <AvatarBox />
            </div>
          </CardBody>
        </Card>
      </div>
    </nav>
  );
};

const AvatarBox = () => {
  return (
    <Dropdown>
      <DropdownTrigger className="hover:cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-end">
            <span className="p-0 text-sm font-bold">Halil Aydın</span>
            <span className="p-0 text-xs font-semibold text-gray-500 ">
              aydinhalil980@gmail.com
            </span>
          </div>
          <Avatar src="/next.svg"></Avatar>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit" className="text-default-500">
          Profile
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
