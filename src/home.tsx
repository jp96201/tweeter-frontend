import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      post: "",
      isFavourite: false
    };
  }
  render() {
    return <div />;
  }
}
