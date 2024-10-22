import { Box, Container, List, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "./footer/logo-main-footer.png";
import logo1 from "./footer/images.png";
import logo2 from "./footer/App_Store_Badge.jpg";
import logo3 from "./footer/logo-footer.png";
import logo4 from "./footer/facebook-logo.png";
import logo5 from "./footer/instagram-logo.png";

const FooterLayout = () => {
  return (
    <>
      <Box
        sx={{
          height: "380px",
          backgroundColor: (theme) => theme.palette.primary.darker,
          paddingTop: "50px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                width: "33.33%",
                paddingRight: "30px",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "66px",
                  marginBottom: "10px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  marginBottom: "8%",
                }}
              >
                Dealbuddy aims to help customers discover new experiences and
                products at the lowest possible prices supporting local
                businesses to thrive.
              </Typography>
              <Typography>Let's find your perfect deal!</Typography>
              <Box
                sx={{
                  display: "flex",
                  height: 40,
                  marginTop: "10%",
                  gap: "10px",
                }}
              >
                <img src={logo1} alt="Images" />
                <img src={logo2} alt="App Store Badge" />
              </Box>
            </Box>
            <Box sx={{ width: "33.33%", paddingRight: "30px" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                  margin: "0",
                }}
              >
                Quick Links
              </Typography>
              <Box
                sx={{
                  listStyleType: "none",
                  paddingLeft: "0",
                  marginBottom: "0",
                  cursor: "pointer",
                }}
              >
                {["Home", "About", "Contact Us", "FAQs", "Blogs"].map(
                  (text, index) => (
                    <Typography
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "14px 0",
                        borderBottom:
                          index < 4 ? "1px dashed rgba(0, 0, 0, 0.15)" : "none",
                      }}
                    >
                      <KeyboardArrowRightIcon />
                      {text}
                    </Typography>
                  )
                )}
              </Box>
            </Box>
            <Box sx={{ width: "33.33%", paddingLeft: "30px" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "28px",
                  margin: "0",
                }}
              >
                General
              </Typography>
              <Box
                sx={{
                  listStyleType: "none",
                  paddingLeft: "0",
                  marginBottom: "0",
                  cursor: "pointer",
                }}
              >
                {[
                  "Categories",
                  "Stores",
                  "Deals",
                  "Map",
                  "NZ Price Comparison Sites",
                ].map((link, index) => (
                  <Typography
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "14px 0",
                      borderBottom:
                        index < 4 ? "1px dashed rgba(0, 0, 0, 0.15)" : "none",
                    }}
                  >
                    <KeyboardArrowRightIcon />
                    {link}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                width: "33.33%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={logo3}
                alt="Footer Logo"
                style={{
                  maxWidth: "100px",
                  height: "auto",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #e1e2e6",
          padding: "30px 16px",
          backgroundColor: (theme) => theme.palette.primary.darker,
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: " 14px",
              lineHeight: "20px",
              margin: "0",
            }}
          >
            Third-party trademarks are the property of their respective
            third-party owners. Presence of a third-party trademark does not
            mean that dealbuddy has any relationship with that third-party or
            that the third-party endorses dealbuddy or its services.
          </Typography>
          <Box
            sx={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Typography
              sx={{
                color: "#00000080",
              }}
            >
              2024 Deal Buddy Limited, All rights reserved.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // mt: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    px: 3,
                  }}
                >
                  Terms of uses
                </Typography>
                {" | "}
                <Typography
                  sx={{
                    px: 3,
                  }}
                >
                  {" "}
                  Privacy Policy
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <img
                    src={logo4}
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <img
                    src={logo5}
                    style={{
                      marginRight: "5px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterLayout;
