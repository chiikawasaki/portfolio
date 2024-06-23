import { Box, Typography } from "@mui/material";
import MenuTypography from "./component/menu-typography";
import MotojiSaki from "./component/motoji-saki";
import ShowPortfolioArea from "./component/show-portfolio-area";

const Home = () => {
  return (
    <Box position={"relative"} m={-3}>
      <Box position={"absolute"} bottom={5} right={30}>
        <MenuTypography title="About ＞" color="#857076" href="./About" />
      </Box>
      <Box
        position={"relative"}
        height={"60vh"}
        width={"100%"}
        sx={{
          backgroundImage: "url(/pink-sky.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          position={"absolute"}
          right={{ md: 30, xs: 25 }}
          top={10}
          display={"flex"}
        >
          <MenuTypography title="About" color="#fff2f2" href="./About" />
          <MenuTypography title="Work" color="#fff2f2" href="/" />
          <MenuTypography title="Home" color="#fff2f2" href="/" />
        </Box>
        <Box pt={{ md: 27, xs: 29 }} pl={{ md: 15, xs: 5 }}>
          <MotojiSaki
            title="MOTOJI"
            color="#fff2f2"
            fontsize={{ md: 100, xs: 65 }}
            textTransform="uppercase"
          />
          <MotojiSaki
            title="SAKI"
            color="#fff2f2"
            fontsize={{ md: 100, xs: 65 }}
            textTransform="uppercase"
          />
        </Box>
      </Box>
      <Box
        bgcolor={"#fff2f2"}
        pt={"20vh"}
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        sx={{ flexFlow: "column", maxWidth: "100%" }}
      >
        <MotojiSaki
          title="Work"
          color="#857076"
          fontsize={45}
          textTransform="capitalize"
        />
      </Box>
      <Box bgcolor={"#fff2f2"} pb={10}>
        <ShowPortfolioArea />
      </Box>
    </Box>
  );
};

export default Home;
