import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import image1 from "./sponser/sponsor-1690156152-369-thumb.png";
import image2 from "./sponser/sponsor-1691557340-762-thumb.png";
import image3 from "./sponser/sponsor.png";

interface CardData {
  text: string;
  image: string;
  text2: string;
}

const cardData: CardData[] = [
  {
    text: "Sponsor 1",
    image: image1,
    text2: "Sponsor 1 description",
  },
  {
    text: "Sponsor 1",
    image: image1,
    text2: "Sponsor 1 description",
  },
  {
    text: "Sponsor 1",
    image: image1,
    text2: "Sponsor 1 description",
  },
];

const CommonSponser = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./image/sponsor.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "#00000080" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CommonSponser;
