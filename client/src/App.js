import React, { useState, useEffect } from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./App.css";

function App() {
  const companiesApi = "http://localhost:5000/api/companies";

  const [companies, setCompanies] = useState([]);
  // const [newCompany, postNewCompany] = postCompanyEndpoint();

  // function createTodo() {
  //   postNewTodo({
  //     title,
  //     body,
  //     userId: 1
  //   });
  // }

  useEffect(() => {
    fetch(companiesApi)
      .then(res => res.json())
      .then(result => setCompanies(result))
      .catch(console.log());
  }, []);

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
    <div className="App">
      <Container maxWidth="sm">
        {companies.map(company => (
          <Paper className="paper" key={company.id}>
            <Grid container spacing={2}>
              <Grid item xs={6} className="company-name">
                <Typography variant="h4">{company.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{company.address}</Typography>
                <Typography>
                  {company.city}, {company.country}
                </Typography>
                <Typography>{company.email}</Typography>
                <Typography variant="subtitle2">
                  {company.phone_number}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
        <Box mt={5} display="flex" justifyContent="flex-end" mr={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={postCompanyEndpoint}
          >
            Add company
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
