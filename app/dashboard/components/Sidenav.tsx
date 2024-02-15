import { pages } from "@/contants/pages";
import {
  Button,
  Divider,
  Image,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

interface SidenavProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isMobile: boolean;
}
export const Sidenav = ({
  sidebarOpen,
  setSidebarOpen,
  isMobile,
}: SidenavProps) => {
  return (
    <aside
      className="fixed left-0 top-0 z-40 transition-all dark:bg-dark"
      style={{
        width: "260px",
        height: "100%",
        transform: `translateX(${sidebarOpen ? "0" : "-100%"})`,
      }}
    >
      <Header isMobile={isMobile} setSidebarOpen={setSidebarOpen} />
      <Divider className="my-1" />
      <PagesList />
    </aside>
  );
};

const Header = ({
  isMobile,
  setSidebarOpen,
}: {
  isMobile: boolean;
  setSidebarOpen: (open: boolean) => void;
}) => {
  const { theme } = useTheme();
  const logo = theme !== "dark" ? "/next-dark.svg" : "/next.svg";

  return (
    <div
      className={`flex gap-3 ${!isMobile ? "justify-center" : "justify-between"} p-3`}
    >
      <div className="flex items-center justify-center">
        <Image
          src={logo}
          width={isMobile ? 100 : 150}
          className="p-1"
          radius="none"
          alt=""
        />
      </div>
      {isMobile && (
        <div className="flex items-center">
          <Button
            isIconOnly
            startContent={<FaAngleLeft className="text-3xl" />}
            className="border-none"
            variant="ghost"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

const PagesList = () => {
  const iconClasses =
    "text-2xl text-default-500 pointer-events-none flex-shrink-0 z-40";

  console.log(pages);
  return (
    <Listbox>
      <ListboxSection
        aria-label="Pages"
        title="Pages"
        classNames={{
          heading: "text-default-500 text-sm font-semibold",
        }}
      >
        {pages.map((page, i) => (
          <ListboxItem
            key={i}
            href={page.href}
            startContent={<page.icon className={iconClasses} />}
            className="p-2"
          >
            <span className="text-lg">{page.label}</span>
          </ListboxItem>
        ))}
      </ListboxSection>
    </Listbox>
  );
};
