import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { LogInCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import { Button, Form, Modal } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import StyleUtils from "../styles/utils.module.css";

interface LogInModalProps {
  onDismiss: () => void;
  onLogInSuccessful: (user: User) => void;
}

const LogInModal = ({ onDismiss, onLogInSuccessful }: LogInModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LogInCredentials>();

  async function onSubmit(credentials: LogInCredentials) {
    try {
      const user = await NotesApi.login(credentials);
      onLogInSuccessful(user);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextInputField
            name="username"
            label="Username"
            type="text"
            placeholder="Username"
            register={register}
            registerOptions={{ required: "Required" }}
            error={errors.username}
          />

          <TextInputField
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            register={register}
            registerOptions={{ required: "Required" }}
            error={errors.password}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className={StyleUtils.fullWidth}
          >
            Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogInModal;
