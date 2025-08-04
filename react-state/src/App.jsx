import "./App.css";
import User from "./components/User";
import users from "./assets/userData";

function App() {
  return (
    <>
      {users.map((user) => (
        <User name={user.name} bio={user.email} />
      ))}
    </>
  );
}

export default App;
