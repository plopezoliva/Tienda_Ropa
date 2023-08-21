/* eslint-disable react/prop-types */
import { Box, Container, Grid } from "@mui/material";
import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  // const [error, setError] = useState({
  //   error: false,
  //   message: "",
  // });

  // const emailValidation = (email) => {
  //   // expresion regular para validar email
  //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   return regex.test(email);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (!emailValidation(email)) {
  //     setError({
  //       error: true,
  //       message: "El email no es valido",
  //     });
  //     return;
  //   }
  //   console.log(email);
  //   setError({
  //     error: false,
  //     message: "",
  //   });
  // };

  return (
    <>
      <Helmet title={"Register"}>
        <Container maxWidth="md">
          <Box
            sx={{
              bgcolor: "#0E1428",

              padding: "13px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Title h1=" Register" />
            <Box
              md={{ width: "23vw", margin: "auto" }}
              component="form"
              autoComplete="off"
            >
              <Title p=" (* campos requeridos)" />

              <Grid container spacing={2} sx={{ margin: "auto", width: "90%" }}>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px", color: "white" }}>
                    <Input
                      label="* Ingresa el Nombre"
                      variant="filled"
                      id="name"
                      type="text"
                      fullWidth
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px", color: "white" }}>
                    <Input
                      label=" * Ingresa el Apellido"
                      variant="filled"
                      id="apellido"
                      type="text"
                      fullWidth
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Box>
                </Grid>

                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px", color: "white" }}>
                    <Input
                      label=" * Ingresa un Email"
                      variant="filled"
                      id="email"
                      type="email"
                      fullWidth
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px", color: "white" }}>
                    <Input
                      label=" 
                  * Confirmar email"
                      variant="filled"
                      id="email"
                      type="text"
                      fullWidth
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px" }}>
                    <Input
                      label=" * Ingresa el rut /DNI"
                      variant="filled"
                      id="dni"
                      type="number"
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      sx={{ mt: 5 }}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px" }}>
                    <Input
                      label=" * Ingresa Fecha de Nancimiento"
                      variant="filled"
                      id="dni"
                      type="number"
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      sx={{ mt: 5 }}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px" }}>
                    <Input
                      label=" Ingresa una Contraseña"
                      variant="filled"
                      id="email"
                      type="password"
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      sx={{ mt: 5 }}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px" }}>
                    <Input
                      label=" Ingresa  Confirmar contraseña"
                      variant="filled"
                      id="email"
                      type="password"
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      sx={{ mt: 5 }}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px" }}>
                    <Input
                      label=" * Ingresa Dirección"
                      variant="filled"
                      id="dni"
                      type="text"
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      sx={{ mt: 5 }}
                    />
                  </Box>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ margin: "10px" }}>
                    <Input
                      label=" * Ingresa Localidad"
                      variant="filled"
                      id="dni"
                      type="text"
                      required
                      //   error={error.error}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      sx={{ mt: 5 }}
                    />
                  </Box>
                </Grid>
                <Box
                  sx={{
                    width: "90%",
                    margin: "auto",
                    mt: 2,
                  }}
                >
                  <Button type="submit" textButton="Registrate" />
                </Box>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Helmet>
    </>
  );
};

export default Register;
