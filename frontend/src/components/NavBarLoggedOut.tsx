import { Button } from "react-bootstrap";

interface NavBarLoggedOutProps {
  onSignUpClicked: () => void;
  onLogInClicked: () => void;
}

const NavBarLoggedOut = ({
  onSignUpClicked,
  onLogInClicked,
}: NavBarLoggedOutProps) => {
  return (
    <>
      <Button onClick={onSignUpClicked}>Sign Up</Button>
      <Button onClick={onLogInClicked}>Log In</Button>
    </>
  );
};

export default NavBarLoggedOut;
