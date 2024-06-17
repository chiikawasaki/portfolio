import { Button, Typography } from "@mui/material";
import "./style.css";
type MenuTypographyProps = {
  title: string;
};

const MenuTypography: React.FC<MenuTypographyProps> = ({ title }) => {
  return (
    <Button>
      <Typography
        color={"#fff2f2"}
        fontSize={20}
        sx={{
          fontFamily: "Jomolhari",
          fontWeight: 400,
          fontStyle: "normal",
          textTransform: "capitalize",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

export default MenuTypography;
