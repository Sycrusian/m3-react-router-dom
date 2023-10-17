import { RegisterForm } from "../../forms/RegisterForm";

export const Register = ({ setUser }) => {
  return (
    <>
      <RegisterForm setUser={setUser} />
    </>
  );
}