import React from "react";
import { Formik } from "formik";
import api from "../../api";
import { useParams, useHistory } from "react-router-dom";
import { TextField, Box, Container, Button } from "@material-ui/core";

const AddBeneficialOwners = () => {
  const { id } = useParams();
  const history = useHistory();
  const router = useHistory();
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await api.post(`companies/${id}/beneficial_owners`, [values.name]);
      console.log(values.name);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (!Number(id)) {
    history.push("/");
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          name: ""
        }}
        onSubmit={onSubmit}
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
              <Box mt={1} display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add Beneficiary
                </Button>
              </Box>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default AddBeneficialOwners;
