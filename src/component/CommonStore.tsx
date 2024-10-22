import { Box, Typography } from "@mui/material";
import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import image1 from "./store/store.png";
import image2 from "./store/store1.png";
import image3 from "./store/store2.png";
import image4 from "./store/store3.png";

interface StoreData {
  text: string;
  image: string;
  text2: string;
  text3: string;
}

const stores: StoreData[] = [
  {
    text: "Store 1",
    image: image1,
    text2: "Store 1 description",
    text3: "Store 1 address",
  },
  {
    text: "Store 2",
    image: image2,
    text2: "Store 2 description",
    text3: "Store 2 address",
  },
  {
    text: "Store 3",
    image: image3,
    text2: "Store 3 description",
    text3: "Store 3 address",
  },
  {
    text: "Store 4",
    image: image4,
    text2: "Store 4 description",
    text3: "Store 4 address",
  },
];

const CommonStore = () => {
  return (
    <Box
      sx={{
        pt: 3,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
      }}
    >
      {stores.map((store, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid rgba(0, 0, 0, .15)",
            borderRadius: "10px",
            marginBottom: "16px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={store.image}
            alt={store.text}
            style={{
              objectFit: "contain",
              height: "90px",
              width: "90px",
              marginRight: "16px",
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              {store.text}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <FmdGoodIcon sx={{ color: "#00c86d", marginRight: "4px" }} />
              <span>{store.text3}</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <LoyaltyIcon sx={{ color: "#00c86d", marginRight: "4px" }} />
              <span>{store.text2}</span>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              background: "#00c86d",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              marginLeft: "16px",
            }}
          >
            <ShareIcon />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CommonStore;
