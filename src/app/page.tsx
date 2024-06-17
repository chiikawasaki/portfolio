import { Box, Typography } from "@mui/material";
import MenuTypography from "./component/menu-typography";
import MotojiSaki from "./component/motoji-saki";
import ShowPortfolioArea from "./component/show-portfolio-area";

const Home = () => {
  return (
    <Box>
      <Box
        position={"relative"}
        height={"60vh"}
        m={-3}
        sx={{
          backgroundImage: "url(/pink-sky.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box position={"absolute"} right={30} top={10} display={"flex"}>
          <MenuTypography title="About" />
          <MenuTypography title="Work" />
          <MenuTypography title="Home" />
        </Box>
        <Box pt={27} pl={15}>
          <MotojiSaki
            title="MOTOJI"
            color="#fff2f2"
            fontsize={100}
            textTransform="uppercase"
          />
          <MotojiSaki
            title="SAKI"
            color="#fff2f2"
            fontsize={100}
            textTransform="uppercase"
          />
        </Box>
      </Box>
      <Box
        bgcolor={"#fff2f2"}
        pt={"30vh"}
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        sx={{ flexFlow: "column" }}
      >
        <MotojiSaki
          title="Work"
          color="#857076"
          fontsize={45}
          textTransform="capitalize"
        />
        <Box>
          <ShowPortfolioArea />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
