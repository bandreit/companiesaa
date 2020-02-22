import React, { useState, useEffect } from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import "./Companies.css";

function Companies() {
  const companiesApi = "http://localhost:5000/api/companies";

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(companiesApi)
      .then(res => res.json())
      .then(result => setCompanies(result))
      .catch(console.log());
  }, []);

  return (
    <Container maxWidth="sm" className="wrapper">
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
    </Container>
  );
}

export default Companies;
