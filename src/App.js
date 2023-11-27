import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import routes from "./routes/routes.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          {
            // Maps through the array of routes, so edit routes.js to add more.
            // Remember to update the NavBar.jsx component as well.
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
