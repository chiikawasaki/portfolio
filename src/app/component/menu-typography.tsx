import { Link, Typography } from "@mui/material";
import "./style.css";
type MenuTypographyProps = {
  title: string;
  color: string;
};

const MenuTypography: React.FC<MenuTypographyProps> = ({ title, color }) => {
  return (
    <Link
      href="/"
      underline="hover"
      color={color}
      fontSize={20}
      mx={1}
      sx={{
        textDecorationColor: { color },
        fontFamily: "Jomolhari",
        fontWeight: 400,
        fontStyle: "normal",
        textTransform: "capitalize",
      }}
    >
      {title}
    </Link>
  );
};

export default MenuTypography;
