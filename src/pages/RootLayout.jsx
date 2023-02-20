import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DeleteModal from "../components/Modal/DeleteModal";

const RootLayout = () => {
  return (
    <>
      <Container className="col-8">
        <Header />
        <Outlet />
      </Container>
      <DeleteModal />
    </>
  );
};

export default RootLayout;
