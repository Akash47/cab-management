import { PasswordRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Hidden,
  InputAdornment,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import RouteImage from "../../assets/navigation.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function BookingScreen() {
  const history = useHistory();

  const [errorState, setErrorState] = useState<{
    error: boolean;
    key?: string;
  }>({ error: false });

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function login() {
    if (!userName) {
      return setErrorState((prevState) => ({
        ...prevState,
        error: true,
        key: "username",
      }));
    }
    if (!PasswordRounded) {
      return setErrorState((prevState) => ({
        ...prevState,
        error: true,
        key: "password",
      }));
    }
    setErrorState((prevState) => ({
      ...prevState,
      error: false,
    }));
    if (userName == "user@cab.com") {
      history.push("/user/book");
    } else if (userName == "driver@cab.com") {
      history.push("/driver/dashboard");
    } else if (userName == "admin@cab.com") {
      history.push("/admin/dashboard");
    }
  }
  return (
    <Grid container direction="row" height="100%">
      <Grid item width="45%" height="100vh" overflow="clip">
        <img
          width="100%"
          style={{ height: "inherit" }}
          src={RouteImage}
          alt="Cab"
        />
      </Grid>
      <Grid item width="55%" flex={1} height="100vh">
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingInline: 2,
          }}
        >
          <Box p={1} m="auto" sx={{ width: { md: 400 } }}>
            <Typography mb="0.5rem" fontSize="1.5rem" fontWeight="bolder">
              Book a Cab
            </Typography>

            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter Pickup"
              sx={{ my: "1rem" }}
              InputProps={{
                startAdornment: (
                  <FmdGoodIcon color="error" sx={{ mr: "1rem" }} />
                ),
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter Destination"
              InputProps={{
                startAdornment: (
                  <FmdGoodIcon color="success" sx={{ mr: "1rem" }} />
                ),
              }}
            />

            <ToggleButtonGroup
              //   value={alignment}
              exclusive
              //   onChange={handleAlignment}
              aria-label="text alignment"
              sx={{ backgroundColor: "white", width: "100%", p: 0, mt: "1rem" }}
            >
              <ToggleButton
                value="left"
                aria-label="left aligned"
                selected
                sx={{ width: "33%" }}
              >
                HatchBack
              </ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                sx={{ width: "33%" }}
              >
                Sedan
              </ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                sx={{ width: "33%" }}
              >
                SUV
              </ToggleButton>
            </ToggleButtonGroup>

            <Button
              variant="contained"
              fullWidth
              sx={{ px: "4rem", mt: "2rem" }}
              onClick={() => {
                history.push("/user/dashboard");
              }}
            >
              Book
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{ px: "4rem", mt: "2rem" }}
              onClick={() => {
                history.push("/user/dashboard");
              }}
            >
              View Account Details
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
