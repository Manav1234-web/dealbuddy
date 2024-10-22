import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OfferDeal from "../component/OfferDeal";
import CommonCard from "../component/CommonCard";
import CommonCoupons from "../component/CommonCoupons";
import CommonSponser from "../component/CommonSponser";
import CommonStore from "../component/CommonStore";
import CommonBlog from "../component/CommonBlog";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface Item {
  text: string;
  imgSrc: string;
}
const items: Item[] = [
  { text: "Travel", imgSrc: "./image/t1.png" },
  { text: "Broadband", imgSrc: "./image/b2.png" },
  { text: "Sport & Fitness", imgSrc: "./image/s3.png" },
  { text: "Food", imgSrc: "./image/f4.png" },
  { text: "Fashion", imgSrc: "./image/f5.png" },
  { text: "Home & Living", imgSrc: "./image/h6.png" },
];

const AppHome = () => {
  return (
    <>
      <Container>
        <Box sx={{ padding: "40px 0" }}>
          <Typography variant="h4" component="h4">
            Find the best deals and coupons near you
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "380px",
              flexShrink: 0,
              marginRight: "30px",
            }}
          >
            <Box
              sx={{
                borderRadius: "10px",
                padding: "20px",
                height: "100%",
                border: "1px solid rgba(0, 0, 0, .15)",
              }}
            >
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  margin: "0 0 3px",
                }}
              >
                Top Categories
              </Typography>
              <Box
                sx={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  marginBottom: 0,
                }}
              >
                {items.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px 0",
                      borderBottom: "1px solid rgba(0, 0, 0, .15)",
                      cursor: "pointer",
                    }}
                  >
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={item.imgSrc}
                        alt={item.text}
                        style={{
                          marginRight: "10px",
                          height: "40px",
                        }}
                      />
                      {item.text}
                    </Box>
                    <KeyboardArrowRightIcon />
                  </Typography>
                ))}
              </Box>
              <Typography
                sx={{
                  paddingTop: "20px",
                  display: "block",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "24px",
                  cursor: "pointer",
                  color: "#00c86d",
                }}
              >
                View all categories
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              maxWidth: "870px",
            }}
          >
            <Box
              sx={{
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src="./image/slider.png"
                style={{
                  width: "100%",
                  height: "524px",
                  display: "block",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <OfferDeal />

      {/*================================== email================================ */}
      <Box sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Container>
          <Box sx={{ background: "#e3faed", borderRadius: "10px", py: 1 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridGap: "40px",
                padding: "0 50px",
                mt: "30px",
              }}
            >
              <Typography variant="h5" sx={{ mt: "20px" }}>
                Join the deals wagon and start saving..
              </Typography>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="email"
                  placeholder="Enter your email address"
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: "50px",
                    backgroundColor: "white",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{
                    marginTop: "10px",
                    position: "relative",
                    right: "5.2%",
                    bottom: "50%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      left: "85%",
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
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* =============Popular Sales===================== */}

      <Box sx={{ paddingTop: "40px" }}>
        <Container>
          <Box sx={{ background: "#e3faed", borderRadius: "10px", p: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridGap: "40px",
                padding: "0 50px",
                fontWeight: 500,
              }}
            >
              <Typography variant="h5">Popular Sales</Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  left: "85%",
                  maxWidth: "20%",
                  padding: "10px 15px",
                  "&:hover": {
                    background:
                      "linear-gradient(109.06deg, #faf57e 12.84%, #fef400 87.16%) !important",
                    color: "black",
                  },
                  background:
                    " linear-gradient(107.73deg, #43df9a 13.88%, #03b465 87.89%) !important",
                  color: "white",
                }}
              >
                View All
              </Button>
            </Box>
          </Box>
          <CommonCard />
        </Container>
      </Box>

      {/* =========================Popular Coupons========================== */}

      <Box sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Container>
          <Box sx={{ background: "#e3faed", borderRadius: "10px", p: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridGap: "40px",
                padding: "0 50px",
              }}
            >
              <Typography variant="h5">Popular Coupons</Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  left: "85%",
                  maxWidth: "20%",
                  padding: "10px 15px",
                  "&:hover": {
                    background:
                      "linear-gradient(109.06deg, #faf57e 12.84%, #fef400 87.16%) !important",
                    color: "black",
                  },
                  background:
                    " linear-gradient(107.73deg, #43df9a 13.88%, #03b465 87.89%) !important",
                  color: "white",
                }}
              >
                View All
              </Button>
            </Box>
          </Box>
          <CommonCoupons />
        </Container>
      </Box>

      {/* ==================Sponsored Ad===================== */}

      <Box
        sx={{
          backgroundColor: "rgba(67, 223, 154, .05)",
          padding: "40px 0",
          display: "block",
        }}
      >
        <Container>
          <Typography variant="h4">Sponsored Ads</Typography>
          <CommonSponser />
        </Container>
      </Box>

      {/* ========================Popular Stores===================== */}

      <Box sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Container>
          <Box sx={{ background: "#e3faed", borderRadius: "10px", p: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridGap: "40px",
                padding: "0 50px",
              }}
            >
              <Typography variant="h5">Popular Stores</Typography>

              <Button
                variant="contained"
                size="small"
                sx={{
                  left: "85%",
                  maxWidth: "20%",
                  padding: "10px 15px",
                  "&:hover": {
                    background:
                      "linear-gradient(109.06deg, #faf57e 12.84%, #fef400 87.16%) !important",
                    color: "black",
                  },
                  background:
                    " linear-gradient(107.73deg, #43df9a 13.88%, #03b465 87.89%) !important",
                  color: "white",
                }}
              >
                View All
              </Button>
            </Box>
          </Box>
          <CommonStore />
        </Container>
      </Box>

      {/* ======================email======================== */}
      <Box sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Container>
          <Box sx={{ background: "#e3faed", borderRadius: "10px", py: 1 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridGap: "40px",
                padding: "0 50px",
                mt: "30px",
              }}
            >
              <Typography variant="h5" sx={{ mt: "20px" }}>
                Join the deals wagon and start saving..
              </Typography>
              <Box sx={{ width: "100%" }}>
                <TextField
                  id="email"
                  placeholder="Enter your email address"
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: "50px",
                    backgroundColor: "white",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{
                    marginTop: "10px",
                    position: "relative",
                    right: "5.2%",
                    bottom: "50%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      left: "85%",
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
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ==================Blogs===================== */}

      <Box sx={{ paddingBottom: "40px" }}>
        <Container>
          <Box sx={{ background: "#e3faed", borderRadius: "10px", p: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridGap: "40px",
                padding: "0 50px",
              }}
            >
              <Typography variant="h5">Blogs</Typography>

              <Button
                variant="contained"
                size="small"
                sx={{
                  left: "85%",
                  maxWidth: "20%",
                  padding: "10px 15px",
                  "&:hover": {
                    background:
                      "linear-gradient(109.06deg, #faf57e 12.84%, #fef400 87.16%) !important",
                    color: "black",
                  },
                  background:
                    " linear-gradient(107.73deg, #43df9a 13.88%, #03b465 87.89%) !important",
                  color: "white",
                }}
              >
                View All
              </Button>
            </Box>
          </Box>
          <CommonBlog />
        </Container>
      </Box>
    </>
  );
};

export default AppHome;
