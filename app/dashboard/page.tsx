import { Box } from "@/components";
import {
  BreadcrumbItem,
  Breadcrumbs,
  CircularProgress,
} from "@nextui-org/react";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Box>
        <Breadcrumbs className="h-96">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      </Box>

      <br />
      <Box>
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </Box>
    </div>
  );
};

export default Dashboard;
