import "./App.css";
import logo from "./logo.png";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Routes exact path="/" component={Launches} />
          <Routes exact path="/launch/:flight_number" component={Launch} />
          <Launches />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
