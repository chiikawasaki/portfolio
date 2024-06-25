import { Box, Typography } from "@mui/material";
import MenuTypography from "./menu-typography";
import Image from "next/image";
import MotojiSaki from "./motoji-saki";

const AboutFirstView = () => {
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
          bgcolor={"#fff2f2"}
        >
          <MenuTypography title="About" color="#857076" href="./About" />
          <MenuTypography title="Work" color="#857076" href="/" />
          <MenuTypography title="Home" color="#857076" href="/" />
        </Box>
      </Box>
      <Box
        display={"flex"}
        textAlign={"center"}
        justifyContent={"center"}
        bgcolor={"#fff2f2"}
        pt={30}
        pb={10}
      >
        <MotojiSaki
          title="About"
          color="#857076"
          fontsize={45}
          textTransform="capitalize"
        />
      </Box>
      <Box display={"flex"} bgcolor={"#fff2f2"} justifyContent={"center"}>
        <Box mr={10} mb={5}>
          <Image
            src={"/my-photo.png"}
            alt="自分の写真"
            width={400}
            height={400}
          />
        </Box>
        <Box ml={5}>
          <MotojiSaki
            title="Motoji Saki"
            color="#857076"
            fontsize={45}
            textTransform="capitalize"
          />
          <Typography
            mt={5}
            lineHeight={2}
            color={"#857076"}
            fontFamily={"Noto Serif JP"}
            sx={{ fontOpticalSizing: "auto" }}
            fontStyle={"normal"}
            fontWeight={"bold"}
          >
            2003年神奈川県出身。2022年に鷗友学園女子中学高等学校を卒業後、
            <br />
            成蹊大学理工学部コンピュータサイエンス専攻に進学し、
            <br />
            コンピュータサイエンスについて学ぶ。
            <br />
            大学3年4月にプログラミングサークルであるPeachtechに入部。
            <br />
            Webアプリ開発について1から学びを深める。
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutFirstView;
