import React, { Component } from 'react';
import "typeface-roboto";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import QuoteMachine from "./components/QuoteMachine";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: 0,
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.getAllQuotes = this.getAllQuotes.bind(this);
  }

  async getAllQuotes() {
    const resp = await fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    const quotes = await resp.json();
    console.log('quotes: ', typeof(quotes));
    this.setState({ quotes }, this.assignNewQuoteIndex)
  }
  componentDidMount() {
    this.getAllQuotes();
  }

  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) return "";
    const a = this.state.quotes[this.state.selectedQuoteIndex];
    return a;
  }

  assignNewQuoteIndex() {
    if (!this.state.quotes.length) return ;
    const a = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    this.setState({
      ...this.state,
      selectedQuoteIndex: a
    })
    return a;
  }

  nextQuoteClickHandler() {
    console.log('hi');
  }

  render() {
    console.log('thisss', this.state.assignNewQuoteIndex);
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          {
            this.selectedQuote
            ? <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}></QuoteMachine>
            : null
          }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
