import { Box, Typography } from "@mui/material";
import MenuTypography from "./menu-button";
import MotojiSaki from "./motoji-saki";
import Link from "next/link";

type PortfolioPageFristViewProps = {
  title: string;
  src: string;
  explanation: string;
  language: string;
  skill: string;
  term: string;
  link?: string;
};

const PortfolioPageFristView: React.FC<PortfolioPageFristViewProps> = ({
  title,
  src,
  explanation,
  language,
  skill,
  term,
  link,
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
          mb={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src={src}
            alt="見本画像"
            width={"80%"}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
        <Box ml={5} display={{ md: "flex" }} justifyContent={"center"} mt={15}>
          <Typography
            color={"#857076"}
            fontFamily={"Noto Serif JP"}
            sx={{ fontOpticalSizing: "auto" }}
            fontStyle={"normal"}
            fontWeight={"bold"}
            fontSize={25}
            mr={{ md: 20 }}
          >
            制作概要
          </Typography>
          <Typography
            width={{ md: "50%", xs: "80%" }}
            color={"#857076"}
            fontFamily={"Noto Serif JP"}
            sx={{ fontOpticalSizing: "auto" }}
            fontStyle={"normal"}
            fontWeight={"bold"}
            pt={1.5}
            lineHeight={2}
            fontSize={17}
          >
            {explanation}
          </Typography>
        </Box>
        <Box ml={{ md: 40, xs: 5 }} py={10}>
          <Typography
            color={"#857076"}
            fontFamily={"Noto Serif JP"}
            sx={{ fontOpticalSizing: "auto" }}
            fontStyle={"normal"}
            fontWeight={"bold"}
          >
            使用言語：{language}
          </Typography>
          <Typography
            color={"#857076"}
            fontFamily={"Noto Serif JP"}
            sx={{ fontOpticalSizing: "auto" }}
            fontStyle={"normal"}
            fontWeight={"bold"}
          >
            使用技術：{skill}
          </Typography>
          <Typography
            color={"#857076"}
            fontFamily={"Noto Serif JP"}
            sx={{ fontOpticalSizing: "auto" }}
            fontStyle={"normal"}
            fontWeight={"bold"}
          >
            制作期間：{term}
          </Typography>
          {link ? (
            <Typography
              color={"#857076"}
              fontFamily={"Noto Serif JP"}
              sx={{ fontOpticalSizing: "auto" }}
              fontStyle={"normal"}
              fontWeight={"bold"}
            >
              URL:　 <Link href={link}>{link}</Link>
            </Typography>
          ) : null}
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#fff2f2"}
      >
        <Box height={1.5} width={"90vw"} bgcolor={"#857076"} />
      </Box>
    </>
  );
};

export default PortfolioPageFristView;
