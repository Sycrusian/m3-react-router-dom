import { useState } from "react";
import { Header } from "./components/Header";
import { RoutesMain } from "./routes/RoutesMain"

const App = () => {
  const [ user, setUser ] = useState(null);

  return (
    <>
      <Header/>
      <RoutesMain user={user} setUser={setUser}/>
    </>
  );
}

export default App;
