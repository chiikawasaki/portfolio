import { Box, Typography } from "@mui/material";
import MenuTypography from "../component/menu-typography";
import MotojiSaki from "../component/motoji-saki";
import Image from "next/image";
import PortfolioPageFristView from "../component/portfolio-page-first-view";

const MyPortfolio = () => {
  return (
    <>
      <PortfolioPageFristView
        title="Motoji Saki Portfolio"
        src="/Homepage.png"
      />
    </>
  );
};

export default MyPortfolio;
