import React from "react";
import { TextField, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./CompanyForm.css";

import { Formik } from "formik";

const CompanyForm = ({ values = {}, onSubmit }) => {
  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
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
                name="phone_number"
                label="Phone number"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone_number}
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
                {values.id ? "Edit" : "Add"} Company
              </Button>
            </Box>
          </div>
        </form>
      )}
    </Formik>
  );
};

CompanyForm.defaultProps = {
  values: {
    name: "",
    address: "",
    city: "",
    country: "",
    email: "",
    phone_number: ""
  }
};
export default CompanyForm;
