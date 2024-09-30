import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PortfolioCard from "./portfolio-card";
import { cardData } from "../const/card-data";

const ShowPortfolioArea = () => {
  return (
    <Box px={{ xs: 2, md: 15 }} py={15}>
      <Grid container spacing={4} padding={3}>
        {cardData.map((data) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={data.title}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <PortfolioCard
              title={data.title}
              image={data.image}
              href={data.href}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShowPortfolioArea;
