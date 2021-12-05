import React, { Component } from "react";
import axios from "axios";
import "./QuoteBox.css";

import {RefreshCcw} from 'react-feather'

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      status: "idle",
      quote: null,
    };
  }
  async componentDidMount() {
      this.fetchRandomQuote();
  }

  fetchRandomQuote = async () =>{
    try {
        this.setState({ status: "loading" });
        const res = await axios.get("https://api.quotable.io/random");
        const quote = res.data;
        this.setState({
          quote,
          status: "done",
        });
      } catch (err) {
        this.setState({ status: "error" });
      }
  }

  handleRefreshQuote = () =>{
    this.fetchRandomQuote();
  }

  renderQuote = () => {
    const { status, quote } = this.state;
    if (status === "loading" || status == "idle") {
      return <div>Loading...</div>;
    }

    if (status === "error") {
      return <div>Something went wrong</div>;
    }

    return (
      <>
        <div className="content">{quote.content}</div>
        <div className="author">- {quote.author}</div>
      </>
    );
  };

  render() {
    const { activeColor } = this.props;
    return (
      <div className="QuoteBox" style={{ color: activeColor }}>
        {this.renderQuote()}
        <div>{this.state.title}</div>
        <div className="newAction">
          <button className="refresh" style={{ backgroundColor: activeColor }} onClick={this.handleRefreshQuote}>
            <RefreshCcw size={18} style={{marginRight: 4}}></RefreshCcw>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
