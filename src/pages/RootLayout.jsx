import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Container className="col-8">
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
