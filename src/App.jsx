import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/userContext";
import Home from "./views/Home";
import Login from "./views/BuscaPokemon";
import Pokemones from "./views/Pokemones";
import NotFound from "./components/NotFound";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Pokemones/:name"
          element={<Pokemones/>}
        />
        <Route
          path="/BuscaPokemon"
          element={<Login />}
        />
        <Route 
        path="*"
        element={<NotFound/>}>
          
          
        </Route>
      </Routes>
    </div>
  );
};
export default App;
