import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
};

class SignUp extends React.Component<
  any,
  { username: string; password: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // Scaffold-DbContext "Server=tcp:nzmsap2.database.windows.net,1433;Initial Catalog=Tweeter;Persist Security Info=False;User ID=Kobe;Password=P@ssw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;" Microsoft.EntityFrameworkCore.SqlServer - OutputDir Model - DataAnnotations

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="User name"
          name="username"
          value={this.state.username}
          onChange={event => {
            this.setState({ username: event.target.value });
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
        <button
          onClick={event => {
            console.log(event);
          }}
        >
          go
        </button>
      </div>
    );
  }
}

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
