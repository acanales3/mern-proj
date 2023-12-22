import { cleanEnv, port, str } from "envalid";

// Makes sure our port will always be a number adn the connection string will always be a string

export default cleanEnv(process.env, {
  MONGO_CONNECTION_STRING: str(),
  PORT: port(),
});
