import React, { useContext, useState } from "react";
import { useInputValue } from "../../../hooks/useInputValue";
import { ContainerForm, Form, Input } from "./styles";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { loginUser } from "../../../context/actions/user.actions";
import { Context } from "../../../context/store/AuthGlobal";
export const LoginForm = ({ disabled, onSubmit, titleButton }) => {
  const name = useInputValue("");
  const email = useInputValue("");
  const password = useInputValue("");

  const { dispatch } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    // console.log("ese es el usuario", user);
    if (name.value === "" || email.value === "" || password === "") {
      setError("No olvides rellenar todos los campos");
    } else {
      loginUser(user, dispatch, setError);
    }
  };

  return (
    <ContainerForm>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder="Ingresa tu nombre" {...name} />
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Contraseña"
          {...password}
          type="password"
        />
        <SubmitButton disabled={disabled}>{titleButton}</SubmitButton>
        {error && <p>{error}</p>}
      </Form>
    </ContainerForm>
  );
};
