import React from "react";
import { Container } from "@material-ui/core";
import CompanyForm from "../companyForm";
import api from "../../api";
import { useHistory } from "react-router-dom";

const AddForm = () => {
  const router = useHistory();
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await api.post("companies", values);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <CompanyForm onSubmit={onSubmit} />
    </Container>
  );
};

export default AddForm;
