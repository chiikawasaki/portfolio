import { Box } from "@mui/material";
import MotojiSaki from "./motoji-saki";

const SkillView = () => {
  return (
    <Box bgcolor={"#857076"} py={10} display={"flex"} justifyContent={"center"}>
      <MotojiSaki
        title="skills"
        color="#fff2f2"
        fontsize={45}
        textTransform="capitalize"
      />
    </Box>
  );
};

export default SkillView;
