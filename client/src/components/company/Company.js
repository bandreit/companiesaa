import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useParams, useHistory } from "react-router-dom";
import api from "../../api";

import "./Company.css";

function Company() {
  const [company, setCompany] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchCompany = async () => {
      const { data } = await api.get(`companies/${id}`);
      setCompany(data[0]);
    };
    fetchCompany();
  }, [id]);

  if (!Number(id)) {
    history.push("/");
    return null;
  }

  return (
    <Container maxWidth="sm" className="wrapper">
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
            <Typography variant="subtitle2">{company.phone_number}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Company;
