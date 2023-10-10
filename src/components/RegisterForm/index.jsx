import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../widgets/Input"
import { Button } from "../widgets/Button";

export const RegisterForm = ({ setUser }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = payload => {
    setUser(payload);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input id="name" label="Nome" type="text" required {...register("name")} />
      <Input id="email" label="E-Mail" type="email" required {...register("email")} />
      <Input id="password" label="Senha" type="password" required {...register("password")} />
      <Button type="submit">Enviar</Button>
    </form>
  );
}