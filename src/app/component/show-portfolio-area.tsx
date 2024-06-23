import { Box, Typography } from "@mui/material";
import React from "react";
import ShowPortfolio from "./show-portfolio";

const ShowPortfolioArea = () => {
  return (
    <Box display={{ md: "flex" }} justifyContent={"space-between"}>
      <ShowPortfolio
        image="./test1.png"
        title="このサイトについて"
        ml={{ md: 30, xs: 17 }}
      />
      <ShowPortfolio
        image="./peachtechtuto-image.png"
        title="Peachtechチュートリアルの作成"
        ml={{ md: 25, xs: 10 }}
      />
    </Box>
  );
};

export default ShowPortfolioArea;
