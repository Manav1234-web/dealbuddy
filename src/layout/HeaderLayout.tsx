import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputBase,
  Modal,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoyaltySharpIcon from "@mui/icons-material/LoyaltySharp";
import ViewCozyIcon from "@mui/icons-material/ViewCozy";
import { transform } from "lodash";
import PlaceIcon from "@mui/icons-material/Place";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import SearchIcon from "@mui/icons-material/Search";
import CommonButton from "../component/CommonButton";
import CommonButtonBase from "../component/CommonButtonBase";
import logo from "./header/logo123.png";

const Headerlayout = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          py: "10px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img
                src={logo}
                alt=""
                style={{
                  height: "45.19px",
                }}
              />
            </Box>
            {/* <FormControl sx={{ minWidth: 180 }}>
              <Select
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: 40,
                }}
                inputProps={{ "aria-label": "Without label" }}
                startAdornment={
                  <PlaceSharpIcon sx={{ color: "#00c86d", mr: 1 }} />
                }
              >
                <MenuItem value="Ten"></MenuItem>
                <MenuItem value={10}>sda</MenuItem>
                <MenuItem value={20}>ads</MenuItem>
                <MenuItem value={30}>asd</MenuItem>
              </Select>
            </FormControl> */}

            <Box
              sx={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: 4,
              }}
            >
              <Button
                sx={{
                  color: "black",
                }}
                startIcon={<PlaceSharpIcon sx={{ color: "#00c86d" }} />}
                onClick={handleOpen}
              >
                open modal
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 500,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 8,
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Select City/Town
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Enter City/Town"
                    variant="outlined"
                  ></TextField>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Current Location
                  </Typography>
                  <Typography>Quick Options</Typography>
                  <Button
                    sx={{
                      position: "absolute",
                      top: "1.5%",
                      right: "1%",
                      color: "yellow",
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Button>{" "}
                </Box>
              </Modal>
            </Box>
            {/* ============================ */}

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                borderRadius: "10px",
                height: 40,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find Your Perfect Sale"
                inputProps={{ "aria-label": "Find Your Perfect Sale" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>

            {/* ==================================== */}

            <FormControl sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "10px",
                  background: transform,
                  padding: "5px",
                  gap: "10px",
                  height: 46,
                  width: "122px",
                }}
              >
                <Avatar />
                <Typography>Login</Typography>
              </Box>
            </FormControl>
          </Box>
        </Container>
      </Box>

      {/* ============================================================= */}

      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.contrastText,
          py: "10px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "#fffff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CommonButtonBase startIcon={<ViewCozyIcon />}>
                Categories
              </CommonButtonBase>
              <CommonButtonBase startIcon={<StorefrontSharpIcon />}>
                Stores
              </CommonButtonBase>
              <CommonButtonBase startIcon={<LoyaltySharpIcon />}>
                Deals
              </CommonButtonBase>
              <CommonButtonBase startIcon={<PlaceIcon />}>
                Maps
              </CommonButtonBase>
            </Box>

            <Box
              sx={{
                display: "flex",
                margin: "6px 0 6px 14px",
                alignItems: "center",
                justifyContent: "space-between",
                height: 40,
              }}
            >
              <CommonButton startIcon={<HelpOutlineIcon />}>
                How it works
              </CommonButton>
              <CommonButton startIcon={<InventoryIcon />}>
                List your business
              </CommonButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Headerlayout;
