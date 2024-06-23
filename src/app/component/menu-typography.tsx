import { Link, Typography } from "@mui/material";
import "./style.css";
type MenuTypographyProps = {
  title: string;
  color: string;
  href: string;
};

const MenuTypography: React.FC<MenuTypographyProps> = ({
  title,
  color,
  href,
}) => {
  return (
    <Link
      href={href}
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
