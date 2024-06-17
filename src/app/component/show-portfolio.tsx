import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const ShowPortfolio = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image="./test1.png"
            alt="my-portfolio-site-image"
          />
        </CardActionArea>
      </Card>
      <Typography>このサイトについて</Typography>
    </>
  );
};

export default ShowPortfolio;
