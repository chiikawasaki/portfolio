import { Box, Typography, Link } from "@mui/material";
import styles from "./portfolio-card.module.css";

type PortfolioCardProps = {
  image: string;
  title: string;
  href: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  title,
  href,
}) => {
  return (
    <Box>
      <Link href={href}>
        <Box boxShadow={2}>
          <img
            src={image}
            alt={"作品イメージ"}
            className={styles.responsiveImage}
          />
        </Box>
      </Link>
      <Link
        href={href}
        underline="hover"
        color={"#857076"}
        sx={{ textDecorationColor: "#857076" }}
      >
        <Typography
          fontFamily={"Noto Serif JP"}
          sx={{ fontOpticalSizing: "auto" }}
          fontStyle={"normal"}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default PortfolioCard;
