import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { Container } from "@mui/material";
import ProductDetail from "../pages/ProductDetail";


const Routers = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </Container>
  );
};

export default Routers;
