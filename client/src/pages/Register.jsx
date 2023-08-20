/* eslint-disable react/prop-types */
import { Box, Button, Grid } from "@mui/material";
import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import imagen1 from "../assets/pizza.jpg";
const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <>
      <Helmet title={"Register"}>
        <Title h1=" Register" />
        <Grid container spacing={2} bgcolor="success">
          <Grid item xs={8}>
            <Box component="form" onSubmit={onSubmit} autoComplete="off" bgcolor="success">
              <Input
                label=" Ingresa un Email"
                variant="outlined"
                id="email"
                type="email"
                fullWidth
                required
                error={error.error}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                label=" Ingresa una Contraseña"
                variant="outlined"
                id="email"
                type="password"
               
                required
                error={error.error}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <img src={imagen1} loading="lazy" />
          </Grid>
        </Grid>
      </Helmet>
    </>
  );
};

export default Register;
