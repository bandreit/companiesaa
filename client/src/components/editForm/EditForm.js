import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import api from "../../api";
import CompanyForm from "../companyForm";

const EditForm = () => {
  const router = useHistory();

  const [company, setCompany] = useState();
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

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await api.put(`companies/${company.id}`, values);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (!company) return <p>fething...</p>;

  return (
    <Container maxWidth="sm">
      <CompanyForm onSubmit={onSubmit} values={company} />
    </Container>
  );
};

export default EditForm;
