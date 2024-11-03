import "./App.css";
import Home from "./components/home/Home";
import Container from "./context/contextProvider";

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
