import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";

type ShowPortfolioProps = {
  image: string;
  title: string;
  ml: any;
};

const ShowPortfolio: React.FC<ShowPortfolioProps> = ({ image, title, ml }) => {
  return (
    <Box>
      <Box
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"#fff2f2"}
        px={18}
        pt={15}
      >
        <Card sx={{ minWidth: 345, height: 300, objectFit: "cover" }}>
          <CardActionArea
            sx={{ width: "100%", height: "100%", bgcolor: "#FBDDDD" }}
          >
            <CardMedia
              component="img"
              height="160"
              image={image}
              alt="my-portfolio-site-image"
            />
          </CardActionArea>
        </Card>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ flexFlow: "column" }}
        ></Box>
      </Box>
      <Typography color={"#857076"} ml={ml}>
        {title}
      </Typography>
    </Box>
  );
};

export default ShowPortfolio;
