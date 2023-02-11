import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import Brands from "./Components/Brands";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import ShoesScreen from "./Screens/ShoesScreen";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="py-3">
        <Container className="app">
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path='/shoes' component={ShoesScreen}/>
          </Switch>
        </Container>
      </main>
      <Brands/>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
