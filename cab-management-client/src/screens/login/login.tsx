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
import { useHistory } from "react-router-dom";
import CabImage from "../../assets/cab_bg.png";

export default function Login() {
  const history = useHistory();
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
                  placeholder="Username or Email"
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
                />
              </FormControl>
            </Box>
            <Button
              variant="contained"
              sx={{ px: "4rem", mt: "2rem" }}
              onClick={() => {
                history.push("/dashboard");
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
