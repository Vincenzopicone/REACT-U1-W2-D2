import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";

const App = () => {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      <Container className="d-flex">
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </Container>
  );
};

export default App;
