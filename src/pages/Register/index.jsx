import { RegisterForm } from "../../components/RegisterForm";

export const Register = ({ setUser }) => {
  return (
    <>
      <RegisterForm setUser={setUser} />
    </>
  );
}