import { Box } from "@mantine/core";
import { ReactNode } from "react";
import { LandingFooter, LandingNavbar } from "../components";

import { Outlet } from "react-router-dom";

interface IProps {
  children?: ReactNode;
  compressedNav?: boolean;
}

const PublicLayout = ({ compressedNav }: IProps) => {
  return (
    <div style={{ width: "100%" }}>
      <LandingNavbar />
      <Box sx={{ marginTop: compressedNav ? 0 : 96 }}>
        <Outlet />
      </Box>
      <LandingFooter />
    </div>
  );
};

export default PublicLayout;
