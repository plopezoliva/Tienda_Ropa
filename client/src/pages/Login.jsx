import { Box, Container } from "@mui/material";
import Helmet from "../components/Helmet/Helmet";
// import { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Helmet title={"Login"}>
        <Container maxWidth="md">
          <Box
            sx={{
              bgcolor: "#0E1428",

              padding: "13px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Title h1=" Inicia Sesión Aquí" />
            <Box
              md={{ width: "23vw", margin: "auto" }}
              component="form"
              autoComplete="off"
            >
              <Box sx={{ margin: "10px", color: "white" }}>
                <Input
                  label=" * Ingresa un Email"
                  variant="filled"
                  id="email"
                  type="email"
                  fullWidth
                  required
                  //   error={error.error}
                  //   onChange={(e) => setEmail(e.target.value)}
                  //   value={email}
                />
              </Box>

              <Box sx={{ margin: "10px" }}>
                <Input
                  label=" Ingresa una Contraseña"
                  variant="filled"
                  id="email"
                  type="password"
                  required
                  //   error={error.error}
                  //   onChange={(e) => setEmail(e.target.value)}
                  //   value={email}
                  sx={{ mt: 5 }}
                />
              </Box>

              <Box
                sx={{
                  width: "100%",
                  margin: "auto",
                  mt: 2,
                  mb: 2,
                }}
              >
                <Button type="submit" textButton="Ingresar  " />
              </Box>
              <NavLink to="/register"><Button
                type="submit"
                textButton="Registrate"
                component={NavLink}
                to="/register"
              /></NavLink>
              
            </Box>
            <Title p=" ¿Olvidaste tu contraseña?" />
          </Box>
        </Container>
      </Helmet>
    </>
  );
};

export default Login;
