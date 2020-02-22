import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import api from "../../api";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

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
        <Paper className="paper" key={company.id}>
          <Grid container spacing={2}>
            <Grid item xs={5} className="company-name">
              <Typography variant="h4">{company.name}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography>{company.address}</Typography>
              <Typography>
                {company.city}, {company.country}
              </Typography>
              <Typography>{company.email}</Typography>
              <Typography variant="subtitle2">
                {company.phone_number}
              </Typography>
            </Grid>
            <Grid item xs={2} className="button">
              <Link to={`/edit/${company.id}`}>
                <Fab color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
}

export default Companies;
