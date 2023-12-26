import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/notes_api";

interface NavBarLoggedInProps {
  user: User;
  onLogOutSuccessful: () => void;
}

const NavBarLoggedIn = ({ user, onLogOutSuccessful }: NavBarLoggedInProps) => {
  async function logout() {
    try {
      await NotesApi.logout();
      onLogOutSuccessful();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <>
      <Navbar.Text className="me-2">Signed in as: {user.username}</Navbar.Text>
      <Button onClick={logout}>Log Out</Button>
    </>
  );
};

export default NavBarLoggedIn;
