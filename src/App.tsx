import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { async } from "q";
import { promises } from "dns";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/" component={Tweeter} />
    </Router>
  );
};

class Tweeter extends React.Component<any, { title: string; post: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      post: "",
      data
    };
  }
  componentDidMount() {
    fetch("https://tweeter.azurewebsites.net/index.html")
      .then(response => response.json())
      .then(response => this.setState({
        text
      }));
  }

  handleSubmit(e: any) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Tweeter</h1>
        <form onSubmit={e => this.handleSubmit(e)} action="">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={event => {
              this.setState({ title: event.target.value });
            }}
          />
          <input
            type="text"
            placeholder="post"
            name="post"
            value={this.state.post}
            onChange={event => {
              this.setState({ post: event.target.value });
            }}
          />
          <button
            onClick={event => {
              console.log(event);
            }}
          >
            post
          </button>
        </form>

        <form>
          <div>
            <textarea name="data" 
            onChange={event => {
              this.setState({ post: event.target.value });
            }}
            />
          </div>
          <button
            onClick={event => {
              console.log(event);
            }}
          />
        </form>
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
