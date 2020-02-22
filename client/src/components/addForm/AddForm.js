import React from "react";
import { TextField, Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

import "./AddForm.css";

function index() {
  const companiesApi = "http://localhost:5000/api/companies";

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          name: "",
          address: "",
          city: "",
          country: "",
          email: "",
          phonenum: ""
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
        // }}

        onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     console.log(
          //       JSON.stringify({
          //         id: 6,
          //         name: values.name,
          //         address: values.address,
          //         city: values.city,
          //         country: values.country,
          //         email: values.email,
          //         phone_number: values.phonenum
          //       })
          //     );
          //     setSubmitting(false);
          //   }, 400);
          fetch(companiesApi, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: 6,
              name: values.name,
              address: values.address,
              city: values.city,
              country: values.country,
              email: values.email,
              phone_number: values.phonenum
            })
          });
          setSubmitting(false);
          resetForm({});
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="formWrapper">
            <div>
              <Box mt={1}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  name="address"
                  label="Address"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  name="city"
                  label="City"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
              </Box>
            </div>
            <div>
              <Box mt={1}>
                <TextField
                  name="country"
                  label="Country"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  name="phonenum"
                  label="Phone number"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phonenum}
                />
              </Box>
              <Box mt={1} display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  //   onClick={postCompanyEndpoint}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add company
                </Button>
              </Box>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default index;
