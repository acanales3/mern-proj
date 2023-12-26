import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";

interface NavBarProps {
  loggedInUser: User | null;
  onSignUpClicked: () => void;
  onLogInClicked: () => void;
  onLogOutSuccessful: () => void;
}

const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLogInClicked,
  onLogOutSuccessful,
}: NavBarProps) => {
  return (
    <Navbar bg="primary" variant="dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand>Notes App</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {loggedInUser ? (
              <NavBarLoggedIn
                user={loggedInUser}
                onLogOutSuccessful={onLogOutSuccessful}
              />
            ) : (
              <NavBarLoggedOut
                onLogInClicked={onLogInClicked}
                onSignUpClicked={onSignUpClicked}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
