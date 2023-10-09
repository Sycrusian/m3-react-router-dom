export const Home = ({ user }) => {
  return (
    <>
      <h1>{user ? `Bem vindo, ${user.name}!` : "HomePage"}</h1>
    </>
  );
}