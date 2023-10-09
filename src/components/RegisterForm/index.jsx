import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../widgets/Input"

export const RegisterForm = ({ setUser }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = payload => {
    setUser(payload);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input htmlFor="name" label="Nome" type="text" required {...register("name")} />
      <Input htmlFor="email" label="E-Mail" type="email" required {...register("email")} />
      <Input htmlFor="password" label="Senha" type="password" required {...register("password")} />
      <button type="submit">Enviar</button>
    </form>
  );
}