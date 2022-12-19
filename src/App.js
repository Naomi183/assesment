import "./App.css";
import "./contactStyle.css";
import { ErrorBoundary } from "react-error-boundary";
import { FallBackError } from "./Components/FallBackError";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Users from "./Routes/Users";
import Contact from "./Routes/Contact";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Routes/ErrorPage";
import PageLayout from "./Routes/PageLayout";
import UsersDetails from "./Routes/Details";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo);
  };

  return (
    <div className="App">
      <>
        <ErrorBoundary FallbackComponent={FallBackError} onError={errorHandler}>
          <NavBar />
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/users" element={<Users />} />
              { <Route exact path="/users/:id" element={<UsersDetails />} /> }
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </>
    </div>
  );
}

export default App;