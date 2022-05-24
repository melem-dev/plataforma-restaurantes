import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts";
import { useNavigate } from "react-router-dom";
import { api } from "../services";

import {
  Button,
  Form,
  Input,
  Container,
  Box,
  UserData,
  UserDataLine,
} from "../components/form/style";

const initialValues = {
  username: "",
  password: "",
};

export default function () {
  const [fields, setFields] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const { SignIn } = useContext(AuthContext);
  const loc = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await api.get("/users");
    console.log(data);
    setUsers(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const auth = await SignIn(fields);

      console.log("teste");

      if (auth) return loc("/dashboard");
    } catch (error) {
      handleValue({ target: { name: "password", value: "" } });
      console.log(error.message);
    }
  }

  function handleValue({ target: { name, value } }) {
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Container>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleValue}
            placeholder="Usuário"
          />

          <Input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleValue}
            placeholder="Senha"
          />

          <Button>Entrar</Button>
        </Form>
      </Box>
      <Box>
        <h1 style={{ textAlign: "center" }}>Usuários</h1>
        {users.map((el, i) => (
          <UserData key={i}>
            <UserDataLine>
              <b>usuário:</b> {el.user}
            </UserDataLine>
            <div>
              <b>senha:</b> {el.password}
            </div>
          </UserData>
        ))}
      </Box>
    </Container>
  );
}
