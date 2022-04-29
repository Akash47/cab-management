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
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [drivers, setDrivers] = useState([]);
  const [cabs, setCabs] = useState([]);

  const fetchData = async () => {
    const driverResponse = await fetch("http://localhost/getDrivers");
    const driverResponseParsed = await driverResponse.json();
    setDrivers(driverResponseParsed);
    const cabResponse = await fetch("http://localhost/getCabs");
    const cabResponseParsed = await cabResponse.json();
    setCabs(cabResponseParsed);
  };

  fetchData();

  const history = useHistory();

  function createCabData(
    cabId: string,
    registration: string,
    model: string,
    type: string,
    seater: number,
    color: string,
    addedOn: string
  ) {
    return { cabId, registration, model, type, seater, color, addedOn };
  }

  const rows = [
    createCabData(
      "CB01",
      "DL7546OJ544",
      "Mahindra XUV 700",
      "SUV",
      6,
      "Silver",
      "11 March 22"
    ),
    createCabData(
      "CB02",
      "PB548HN4588",
      "Honda City Hibrid",
      "Sedan",
      4,
      "Red",
      "25 March 22"
    ),
    createCabData(
      "CB03",
      "PB656NI5999",
      "Maruti Alto LLXI",
      "Hatchback",
      4,
      "White",
      "16 April 22"
    ),
  ];

  function createDriverData(
    firstName: string,
    lastName: string,
    rating: string,
    licence: string,
    contact: number,
    mail: string,
    ridesDone: number
  ) {
    return { firstName, lastName, rating, licence, contact, mail, ridesDone };
  }

  const driverRows = [
    createDriverData(
      "Akhil",
      "Jhunjhunwala",
      "4.9/5",
      "PB48944ER358",
      7837116221,
      "akhiljjw@gmailcom",
      3
    ),
    createDriverData(
      "Akshay",
      "Nigam",
      "4.8/5",
      "DL459666KO579",
      9876543210,
      "akshay@gmail.com",
      2
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
            Admin Dashboard
          </Typography>
          <Button variant="text">Logout</Button>
        </Stack>

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            mx: "4rem",
            mt: "1rem",
          }}
        >
          <Typography fontWeight="bolder">Cabs List</Typography>
          <Button variant="contained">Add New</Button>
        </Stack>

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
                  <TableCell sx={{ fontWeight: "bolder" }}>Cab Id</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>
                    Registration No
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Model</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Seater</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Color</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Added On</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.cabId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.cabId}
                    </TableCell>
                    <TableCell>{row.registration}</TableCell>
                    <TableCell>{row.model}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.seater}</TableCell>
                    <TableCell>{row.color}</TableCell>
                    <TableCell>{row.addedOn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            mx: "4rem",
            mt: "1rem",
          }}
        >
          <Typography fontWeight="bolder">Drivers List</Typography>
          <Button variant="contained">Add New</Button>
        </Stack>

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
                    First Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Rating</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>
                    Licence No
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>
                    Contact No
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Mail</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>
                    Rides Done
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {driverRows.map((row) => (
                  <TableRow
                    key={row.firstName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.licence}</TableCell>
                    <TableCell>{row.contact}</TableCell>
                    <TableCell>{row.mail}</TableCell>
                    <TableCell>{row.ridesDone}</TableCell>
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
