import { Box, Typography } from "@mui/material";
import React from "react";
import ShowPortfolio from "./show-portfolio";

const ShowPortfolioArea = () => {
  return (
    <Box display={{ md: "flex" }} justifyContent={"space-between"}>
      <ShowPortfolio image="./test1.png" title="このサイトについて" ml={30} />
      <ShowPortfolio
        image="./peachtechtuto-image.png"
        title="Peachtechチュートリアルの作成"
        ml={25}
      />
    </Box>
  );
};

export default ShowPortfolioArea;
