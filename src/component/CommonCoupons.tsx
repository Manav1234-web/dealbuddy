import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import StoreIcon from "@mui/icons-material/Store";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import image1 from "./coupons/product.jpg";
import image2 from "./coupons/product1.png";
import image3 from "./coupons/product2.webp";
import image4 from "./coupons/product3.png";
import image5 from "./coupons/product4.png";
import { DealCouponService } from "../service/dealcoupon.service";

interface CardData {
  text: string;
  image: string;
  text2: string;
  text3: string;
  text4: string;
  click: string;
}

const dealCouponService = DealCouponService.getInstance<DealCouponService>();

const cardData: CardData[] = [
  {
    text: "COUPON - IN STORE",
    image: image1,
    text2: "Lime cafe - 5% off on all food items",
    text3: "Lime Cafe, Rotorua",
    text4: "Rotorua",
    click: "3.3k",
  },
  {
    text: "COUPON - IN STORE",
    image: image2,
    text2: "Subway - Buy 2 foot longs for $24",
    text3: "Subway, Hanmer Springs",
    text4: "Hanmer Springs",
    click: "3.3k",
  },
  {
    text: "COUPON - IN STORE",
    image: image3,
    text2: "Family Fun day - Hanmer Springs",
    text3: "Samsara Medispa, Hamilton",
    text4: "Hamilton",
    click: "3.3k",
  },
  {
    text: "COUPON - IN STORE",
    image: image4,
    text2: "Samsara Spa - Subscribe and get discounts",
    text3: "Hamilton Model Engineers, Auckland",
    text4: "Auckland",
    click: "3.3k",
  },
  {
    text: "COUPON - IN STORE",
    image: image5,
    text2: "Auckland Skywalk - Book ahead",
    text3: "NotBadTech, Hamilton",
    text4: "Hamilton",
    click: "3.3k",
  },
];

const CommonCoupons = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Stack
      spacing={0}
      sx={{
        pt: 3,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{ display: "flex", flexDirection: "column", maxWidth: 345 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardMedia
            component="img"
            height="194"
            image={card.image}
            sx={{
              width: 306,
              height: 200,
            }}
          />
          <CardContent
            sx={{
              width: "100%",
              background: "rgba(67, 223, 154, .05)",
              border: "1px dashed rgba(0, 0, 0, .15)",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Box>
              <Typography>{card.text}</Typography>
              <Typography variant="h6">{card.text2}</Typography>
            </Box>
          </CardContent>
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
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#e3faed",
              padding: "10px",
            }}
          >
            <Stack spacing={1}>
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
                <Typography>Expires In 1 days</Typography>
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
                marginTop: "10px",
              }}
            >
              View Deal
            </Button>
            <Box
              sx={{
                position: "absolute",
                background: "rgba(0, 0, 0, .75)",
                color: "white",
                boxShadow: "0 1px 2px #1018280d",
                padding: "8px 14px",
                bottom: "90%",
                left: "15px",
              }}
            >
              <Typography>Activities</Typography>
            </Box>
            <Button
              sx={{
                cursor: "pointer",
                position: "absolute",
                top: "1.5%",
                right: "1%",
                color: "yellow",
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default CommonCoupons;
