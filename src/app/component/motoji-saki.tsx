import { Box, Typography } from "@mui/material";
import "./style.css";

type MotojiSakiProps = {
  title: string;
  color: string;
  fontsize: number;
  textTransform: string;
};
const MotojiSaki: React.FC<MotojiSakiProps> = ({
  title,
  color,
  fontsize,
  textTransform,
}) => {
  return (
    <Typography
      color={color}
      fontSize={fontsize}
      sx={{
        fontFamily: "Jomolhari",
        fontWeight: 400,
        fontStyle: "normal",
        textTransform: { textTransform },
      }}
    >
      {title}
    </Typography>
  );
};

export default MotojiSaki;
