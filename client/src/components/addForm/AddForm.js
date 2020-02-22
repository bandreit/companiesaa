import React from "react";
import { TextField, Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./AddForm.css";

function index() {
  const companiesApi = "http://localhost:5000/api/companies";
  function postCompanyEndpoint() {
    fetch(companiesApi, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 4,
        name: "H&M",
        address: "Str. Huipaimi 4",
        city: "Los Angeles",
        country: "USA",
        email: "hm@la.com",
        phone_number: "+1241362625"
      })
    });
  }
  return (
    <Container maxWidth="sm" className="formWrapper">
      <div>
        <Box mt={1}>
          <TextField name="fname" label="Name" variant="outlined" required />
        </Box>
        <Box mt={1}>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            required
          />
        </Box>
        <Box mt={1}>
          <TextField name="city" label="City" variant="outlined" required />
        </Box>
      </div>
      <div>
        <Box mt={1}>
          <TextField
            name="country"
            label="Country"
            variant="outlined"
            required
          />
        </Box>
        <Box mt={1}>
          <TextField name="email" label="E-mail" variant="outlined" />
        </Box>
        <Box mt={1}>
          <TextField name="phonenum" label="Phone number" variant="outlined" />
        </Box>
        <Box mt={1} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={postCompanyEndpoint}
          >
            Add company
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default index;
