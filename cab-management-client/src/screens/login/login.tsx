import { PasswordRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import CabImage from "../../assets/cab_bg.png";

export default function Login() {
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
    console.log(userName == "user@cab.com");
    console.log(userName == "driver@cab.com");
    console.log(userName == "admin@cab.com");

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
      <Grid item md={6} height="100vh" overflow="clip">
        <img
          width="100%"
          style={{ height: "inherit" }}
          src={CabImage}
          alt="Cab"
        />
      </Grid>
      <Grid item md={6} flex={1} height="100vh">
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
            <Typography mb="0.5rem" fontSize="2rem" fontWeight="bolder">
              Welcome to Cab
            </Typography>
            <Typography mb="2rem" fontSize="1.5rem" color="text.secondary">
              Sign in to your account
            </Typography>
            <Box
              component={"form"}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              flex={1}
            >
              <FormControl fullWidth>
                <FormLabel required htmlFor="email" sx={{ mb: "0.4rem" }}>
                  Username or Email
                </FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="Username or Email"
                  error={errorState.error && errorState.key == "username"}
                  helperText={
                    errorState.error &&
                    errorState.key == "username" &&
                    "Username is required"
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: "0.8rem" }}>
                <FormLabel required htmlFor="email" sx={{ mb: "0.4rem" }}>
                  Password
                </FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Password"
                  type="password"
                  error={errorState.error && errorState.key == "password"}
                  helperText={
                    errorState.error &&
                    errorState.key == "password" &&
                    "Password is required"
                  }
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
            <Button
              variant="contained"
              sx={{ px: "4rem", mt: "2rem" }}
              onClick={login}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
