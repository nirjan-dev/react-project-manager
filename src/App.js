import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Dashboard} />
        <Route component={ProjectDetails} path="/projects/:id" />
        <Route component={SignIn} path="/signin" />
        <Route component={SignUp} path="/signup" />
        <Route component={CreateProject} path="/create" />
      </div>
    </BrowserRouter>
  );
}

export default App;
