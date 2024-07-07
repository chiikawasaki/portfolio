import { Box } from "@mui/material";
import Image from "next/image";

const ShowSkillArea = () => {
  return (
    <Box pb={5}>
      <Box display={{ md: "flex" }} justifyContent={"center"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          m={{ xs: 3 }}
          ml={{ xs: 5 }}
        >
          <Image
            src={"/css-html-image.png"}
            alt="cssとhtmlのロゴ"
            width={209}
            height={133}
          />
        </Box>
        <Box ml={3} display={"flex"} justifyContent={"center"}>
          <Image
            src={"/react-logo.png"}
            alt="reactのロゴ"
            width={144}
            height={132}
          />
        </Box>
      </Box>
      <Box display={{ md: "flex" }} justifyContent={"center"}>
        <Box m={3} display={"flex"} justifyContent={"center"}>
          <Image
            src={"/ts-image.png"}
            alt="TSのロゴ"
            width={107}
            height={107}
          />
        </Box>
        <Box m={3} display={"flex"} justifyContent={"center"}>
          <Image
            src={"/js-image.png"}
            alt="JSのロゴ"
            width={110}
            height={101}
          />
        </Box>
        <Box m={3} mt={5} display={"flex"} justifyContent={"center"}>
          <Image
            src={"/nextjs-image.png"}
            alt="JSのロゴ"
            width={243}
            height={80}
          />
        </Box>
      </Box>
      <Box display={{ md: "flex" }} justifyContent={"center"}>
        <Box m={3} mt={5} display={"flex"} justifyContent={"center"}>
          <Image
            src={"/python-logo.png"}
            alt="pythonのロゴ"
            width={85}
            height={103}
          />
        </Box>
        <Box m={3} display={"flex"} justifyContent={"center"}>
          <Image
            src={"/cpp_logo.png"}
            alt="C++のロゴ"
            width={112}
            height={128}
          />
        </Box>
        <Box m={3} display={"flex"} justifyContent={"center"}>
          <Image
            src={"/java-image.png"}
            alt="javaのロゴ"
            width={180}
            height={109}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ShowSkillArea;
