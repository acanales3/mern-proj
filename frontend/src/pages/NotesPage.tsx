import { Container } from "react-bootstrap";
import NotesPageLoggedOut from "../components/NotesPageLoggedOut";
import NotesPageLoggedIn from "../components/NotesPageLoggedIn";
import styles from "../styles/NotesPage.module.css";
import { User } from "../models/user";

interface NotesPageProps {
  loggedInUser: User | null;
}

const NotesPage = ({ loggedInUser }: NotesPageProps) => {
  return (
    <Container className={styles.notesPage}>
      <>{loggedInUser ? <NotesPageLoggedIn /> : <NotesPageLoggedOut />}</>
    </Container>
  );
};

export default NotesPage;
