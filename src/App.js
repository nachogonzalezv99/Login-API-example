import { Routes, Route } from "react-router-dom";
import Logout from "./Components/Logout";
import ProtectedRoute from "./Components/ProtectedRoute";
import AllUsers from "./Pages/AllUsers";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import SingleUser from "./Pages/SingleUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/all-users"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllUsers />} />
          <Route path=":id" element={<SingleUser />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
