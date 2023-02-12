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
import ProductScreen from "./Screens/ProductScreen";
import StylingServiceScreen from "./Screens/StylingServiceScreen";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="py-3">
        <Container className="app">
          <Switch>
            <Route path="/impulse" component={HomeScreen} exact />
            <Route path="/shoes" component={ShoesScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/styling_service" component={StylingServiceScreen} />
          </Switch>
        </Container>
      </main>
      <Brands />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
