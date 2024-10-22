import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import image1 from "./blog/blog-1644911669-925-thumb.jpg";
import image2 from "./blog/blog-1662610546-409-thumb.jpg";
import image3 from "./blog/blog-1664428031-105-thumb.jpg";
import image4 from "./blog/blog-1684715554-222-thumb.png";
import image5 from "./blog/blog-1693449104-544-thumb.png";

interface CardData {
  text: string;
  image: string;
  text2: string;
}

const cardData: CardData[] = [
  {
    text: "Affordable travel tips to stay",
    image: image1,
    text2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
  },
  {
    text: "Want to spend the day experiencing the best public",
    image: image2,
    text2:
      "Id cursus metus aliquam eleifend mi in nulla posuere. Ipsum faucibus vitae alique.",
  },
  {
    text: "Fashion's taking its inspiration from the Year",
    image: image3,
    text2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
  },
  {
    text: "The Best Ways to Get Last-Minute Gifts and Earn Cash",
    image: image4,
    text2:
      "Id cursus metus aliquam eleifend mi in nulla posuere. Ipsum faucibus vitae alique.",
  },
  {
    text: "This keto cheesecake is creamy, sweet, deeply",
    image: image5,
    text2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
  },
];

const CommonBlog: React.FC = () => {
  return (
    <Stack
      spacing={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 2,
        pt: 3,
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
          }}
        >
          <CardMedia component="img" height="194" image={card.image} />
          <CardContent
            sx={{
              flexGrow: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {card.text}
            </Typography>
            <Typography variant="body2" sx={{ color: "#00000080", mb: 2 }}>
              {card.text2}
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                "&:hover": {
                  background:
                    "linear-gradient(109.06deg, #faf57e 12.84%, #fef400 87.16%) !important",
                  color: "black",
                },
                background:
                  "linear-gradient(107.73deg, #43df9a 13.88%, #03b465 87.89%) !important",
                color: "white",
              }}
            >
              View Deal
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default CommonBlog;
