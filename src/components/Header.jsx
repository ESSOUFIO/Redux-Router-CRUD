import { Nav, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div className="my-4">
      <h2>Redux Router CRUD</h2>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Redux</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="post/add">
              <Nav.Link>Add Post</Nav.Link>
            </LinkContainer>

            <LinkContainer to="about-us">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="login" className="ms-auto">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
