import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, CardContent, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StoreIcon from "@mui/icons-material/Store";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import image1 from "./sale/product.jpg";
import image2 from "./sale/product2.jpeg";
import image3 from "./sale/product3.jpg";
import image4 from "./sale/product4.jpg";
import image5 from "./sale/product5.jpg";

interface CardData {
  text: string;
  image: string;
  text2: string;
  text3: string;
  text4: string;
  click: string;
}

const cardData: CardData[] = [
  {
    text: "SALE - ONLINE / IN STORE",
    image: image1,
    text2: "Rainbows End - Group discounts",
    text3: "Subway Grey street",
    text4: "NZ Wide",
    click: "3.3k",
  },
  {
    text: "SALE - ONLINE / IN STORE",
    image: image2,
    text2: "Subway - Buy 2 foot longs for $24",
    text3: "Hanmer Springs",
    text4: "Auckland",
    click: "3.3k",
  },
  {
    text: "SALE - ONLINE / IN STORE",
    image: image3,
    text2: "Family Fun day - Hanmer Springs",
    text3: "Samsara Medispa",
    text4: "Hamilton",
    click: "3.3k",
  },
  {
    text: "SALE - ONLINE / IN STORE",
    image: image4,
    text2: "Samsara Spa - Subscribe and get",
    text3: "Hamilton Model Engineers",
    text4: "Auckland",
    click: "3.3k",
  },
  {
    text: "SALE - ONLINE / IN STORE",
    image: image5,
    text2: "Auckland Skywalk - Book ahead",
    text3: "NotBadTech",
    text4: "Hamilton",
    click: "3.3k",
  },
];

const CommonCard: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardMedia
            component="img"
            image={card.image}
            alt={card.text}
            sx={{
              width: 306,
              height: 200,
            }}
          />
          {hoveredIndex === index && (
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                bottom: "59%",
                fontSize: "16px",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#00000080",
                boxShadow: "0 0 15px #0000000d",
                height: "38px",
              }}
            >
              <Box
                sx={{
                  lineHeight: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="./image/click.png"
                  style={{
                    height: "18px",
                    width: "18px",
                  }}
                  alt="Click Icon"
                />
                <Typography>{card.click}</Typography>
              </Box>
            </Box>
          )}
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                background: "rgba(0, 0, 0, .75)",
                color: "white",
                padding: "8px 14px",
                bottom: "90%",
                left: "15px",
              }}
            >
              <Typography>Activities</Typography>
            </Box>
            <Button
              sx={{
                position: "absolute",
                top: "1.5%",
                right: "1%",
                color: "yellow",
              }}
            >
              <FavoriteBorderIcon />
            </Button>
            <Box>
              <Typography sx={{ marginBottom: "6px", display: "block" }}>
                {card.text}
              </Typography>
              <Typography variant="h6">{card.text2}</Typography>
            </Box>
            <Stack spacing={1} py={2}>
              <Stack direction="row" spacing={2}>
                <StoreIcon sx={{ color: "#535353" }} />
                <Typography>{card.text3}</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FmdGoodIcon sx={{ color: "#535353" }} />
                <Typography>{card.text4}</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <EventAvailableIcon sx={{ color: "#535353" }} />
                <Typography>Expires In 99 days</Typography>
              </Stack>
            </Stack>
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

export default CommonCard;
