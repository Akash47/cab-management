import {
  Button,
  Paper,
  Stack,
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function DriverDashboard() {
  const [drivers, setDrivers] = useState({});
  const [rides, setRides] = useState([]);

  const fetchData = async () => {
    const driverResponse = await fetch("http://localhost/driverData?id=D01");
    const driverResponseParsed = await driverResponse.json();
    setDrivers(driverResponseParsed);
    const ridesResponse = await fetch("http://localhost/getDriverRides?id=D01");
    const ridesResponseParsed = await ridesResponse.json();
    setRides(ridesResponseParsed);
  };

  const history = useHistory();

  function createData(
    bookingId: string,
    from: string,
    to: string,
    date: string,
    distance: number,
    status: boolean,
    amount: number
  ) {
    return { bookingId, from, to, date, distance, status, amount };
  }

  const rows = [
    createData("BO01", "Andheri", "Dadar", "23 April 11:59pm", 11, true, 159),
    createData("BO01", "Juhu", "Gorgaon", "24 April 1:45am", 8, true, 135),
    createData(
      "BO01",
      "Andheri",
      "ChurchGate",
      "25 April 6:45pm",
      18,
      false,
      0
    ),
  ];
  return (
    <Paper sx={{ height: "100vh" }}>
      <Stack px="2rem" py="1.5rem">
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight="bolder" fontSize="1.5rem">
            Driver Dashboard
          </Typography>
          <Button variant="text">Logout</Button>
        </Stack>

        <Paper
          elevation={1}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            mx: "4rem",
            mt: "3rem",
          }}
        >
          <Grid container>
            <Grid item md={2}>
              <AccountBoxIcon color="info" sx={{ fontSize: "9rem" }} />
            </Grid>
            <Grid container md={10} py="1rem">
              <Grid item md={2}>
                <Typography>First Name:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>Akhil</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Last Name:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>Jhunjhunwala</Typography>
              </Grid>

              <Grid item md={2}>
                <Typography>Email:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>akhiljjw@gmail.com</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Phone no</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>+91 7837116221</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Rating:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>4.8/5</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Total Rides Taken:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>3</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Driving License:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>PB48944ER358</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Vehicle No:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>PB10R7934</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Car Model:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>Honda City Hybrid</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography>Cab Type:</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>Sedan</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            mx: "4rem",
            mt: "1rem",
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bolder" }}>
                    Booking Id
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>From</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>To</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Distance</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.bookingId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.bookingId}
                    </TableCell>
                    <TableCell>
                      <CircleIcon
                        color={row.status ? "success" : "error"}
                        sx={{ fontSize: "0.7rem" }}
                      />
                      {row.status ? "Success" : "Booking Cancelled"}
                    </TableCell>
                    <TableCell>{row.from}</TableCell>
                    <TableCell>{row.to}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.distance} kms</TableCell>
                    <TableCell>Rs. {row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </Paper>
  );
}
