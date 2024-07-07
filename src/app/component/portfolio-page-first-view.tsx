import { Box, Typography } from "@mui/material";
import MenuTypography from "./menu-typography";
import MotojiSaki from "./motoji-saki";
import Image from "next/image";

type PortfolioPageFristViewProps = {
  title: string;
  src: string;
};

const PortfolioPageFristView: React.FC<PortfolioPageFristViewProps> = ({
  title,
  src,
}) => {
  return (
    <>
      <Box
        position={"relative"}
        width={"100%"}
        height={"5vh"}
        bgcolor={"#fff2f2"}
      >
        <Box
          position={"absolute"}
          right={{ md: 30, xs: 25 }}
          top={10}
          bgcolor={"#fff2f2"}
        >
          <MenuTypography title="About" color="#857076" href="./About" />
          <MenuTypography title="Work" color="#857076" href="/" />
          <MenuTypography title="Home" color="#857076" href="/" />
        </Box>
      </Box>
      <Box
        display={{ md: "flex" }}
        textAlign={"center"}
        justifyContent={"center"}
        bgcolor={"#fff2f2"}
        pt={30}
        pb={10}
      >
        <MotojiSaki
          title={title}
          color="#857076"
          fontsize={45}
          textTransform="capitalize"
        />
      </Box>
      <Box bgcolor={"#fff2f2"}>
        <Box
          mr={10}
          mb={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ flexFlow: "column" }}
        >
          <Image
            src={src}
            alt="見本画像"
            width={1000}
            height={600}
            style={{ boxShadow: "10px 10px 15px -10px" }}
            className="image"
          />
        </Box>
        <Box
          ml={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            mt={5}
            color={"#857076"}
            fontFamily={"Noto Serif JP"}
            sx={{ fontOpticalSizing: "auto" }}
            fontStyle={"normal"}
            fontWeight={"bold"}
          >
            制作概要
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PortfolioPageFristView;
