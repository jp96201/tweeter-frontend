 //  import Webcam
import Webcam from "react-webcam";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { any } from "prop-types";
// add new state to App.tsx states interface.

interface IState {
  title: "",
  post: "",
  isFavourite: false,
  refCamera: any
}

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/homepage" component={HomePage} />
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

class HomePage extends React.Component<{}, IState> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      post: "",
      isFavourite: false,
      refCamera: React.createRef(),
    }
  }
  render() {
    return (<div>
      <div>
        <Webcam>
          audio={false}
          screenshotFormat="image/jpeg"
          ref={this.state.refCamera}
        </Webcam>
      </div>
      <div>
          <form id="postform">
            Create Post:
            <textarea name="post" form="postform"></textarea>
            <input name="post" type="submit"/>
            
          </form>

          <form id="readform">
            Read Post:
            <textarea form="readrform"></textarea>
          </form>

          <form id="editform">
            Update Post:
            <textarea name="update" form="editform"></textarea>
            <input name="update" type="submit"/>
          </form>

          <form id="delform">
            Delete Post:
            <textarea name="delete" form="delform"></textarea>
            <input name="delete" type="submit"/>
          </form>
      </div>
    </div>);
  }
}

export default App;
