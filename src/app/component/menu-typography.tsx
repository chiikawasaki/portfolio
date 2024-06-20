import { Button, Typography } from "@mui/material";
import "./style.css";
type MenuTypographyProps = {
  title: string;
  color: string;
};

const MenuTypography: React.FC<MenuTypographyProps> = ({ title, color }) => {
  return (
    <Button>
      <Typography
        color={color}
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
