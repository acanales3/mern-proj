import { Container } from "react-bootstrap";
import LogInModal from "./components/LogInModal";
import NavBar from "./components/NavBar";
import SignUpModal from "./components/SignUpModal";
import styles from "./styles/NotesPage.module.css";
import { useEffect, useState } from "react";
import { User } from "./models/user";
import * as NotesApi from "./network/notes_api";
import NotesPageLoggedIn from "./components/NotesPageLoggedIn";
import NotesPageLoggedOut from "./components/NotesPageLoggedOut";

function App() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await NotesApi.getLoggedInUser();
        setLoggedInUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoggedInUser();
  }, []);

  return (
    <div>
      <NavBar
        loggedInUser={loggedInUser}
        onLogInClicked={() => setShowLogInModal(true)}
        onSignUpClicked={() => setShowSignUpModal(true)}
        onLogOutSuccessful={() => setLoggedInUser(null)}
      />
      <Container className={styles.notesPage}>
        <>{loggedInUser ? <NotesPageLoggedIn /> : <NotesPageLoggedOut />}</>
      </Container>
      {showSignUpModal && (
        <SignUpModal
          onDismiss={() => setShowSignUpModal(false)}
          onSignUpSuccessful={(user) => {
            setLoggedInUser(user);
            setShowSignUpModal(false);
          }}
        />
      )}
      {showLogInModal && (
        <LogInModal
          onDismiss={() => setShowLogInModal(false)}
          onLogInSuccessful={(user) => {
            setLoggedInUser(user);
            setShowLogInModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
