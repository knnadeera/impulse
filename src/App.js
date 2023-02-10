import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="py-3">
        <Container className="app">
          <Switch>
            <Route path="/" component={HomeScreen} exact />
          </Switch>
        </Container>
      </main>
    </>
  );
}

export default App;
