import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import image1 from "./home-deals.png";
import image2 from "./home-coupons.png";

const OfferDeal: React.FC = () => {
  const offers = [
    {
      text: "Offers pulled by our smart bots",
      image: image1,
    },
    {
      text: "Deals added by vendors and our team",
      image: image2,
    },
  ];

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {offers.map((offer, index) => (
          <Grid item xs={12} sm={6} mt={10} key={index}>  
            <Box
              sx={{
                backgroundImage: `url(${offer.image })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                position: "relative",
                height: "200px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                <Typography variant="h6" align="center">
                  {offer.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OfferDeal;
