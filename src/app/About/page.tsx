import { Box } from "@mui/material";
import AboutFirstView from "../component/about-first-view";
import SkillView from "../component/skill-view";

const page = () => {
  return (
    <Box m={-1}>
      <AboutFirstView />
      <SkillView />
    </Box>
  );
};

export default page;
