import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import api from "../../api";
import { Link } from "react-router-dom";

import "./Companies.css";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { data } = await api.get("companies");
      setCompanies(data);
    };
    fetchCompanies();
  }, []);

  return (
    <Container maxWidth="sm" className="wrapper">
      {companies.map(company => (
        <Link to={`/edit/${company.id}`} key={company.id}>
          <Paper className="paper">
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
        </Link>
      ))}
    </Container>
  );
}

export default Companies;
