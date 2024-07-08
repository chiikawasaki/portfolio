import { Box } from "@mui/material";
import MotojiSaki from "./motoji-saki";
import ShowSkillArea from "./show-skill-area";
import MenuTypography from "./menu-button";

const SkillView = () => {
  return (
    <Box bgcolor={"#857076"}>
      <Box
        py={10}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <MotojiSaki
          title="skills"
          color="#fff2f2"
          fontsize={45}
          textTransform="capitalize"
        />
      </Box>
      <ShowSkillArea />
      <Box
        height={"10vh"}
        width={"100%"}
        bgcolor={"#fff2f2"}
        position={"relative"}
      >
        <Box position={"absolute"} right={3} bottom={3}>
          <MenuTypography title={"Home >"} color={"#857076"} href={"/"} />
        </Box>
      </Box>
    </Box>
  );
};

export default SkillView;
