import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: 0,
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.getAllQuotes = this.getAllQuotes.bind(this);
  }

  async getAllQuotes() {
    const resp = await fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    const quotes = await resp.json();
    console.log('quotes: ', typeof(quotes));
    this.setState({ quotes: quotes.slice(0, 90) }, () => {
      this.selectQuoteIndex();
      // this.setState({ selectedQuoteIndex: 2 })
    })
  }
  componentDidMount() {
    this.getAllQuotes();
  }

  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) return "";
    const a = this.state.quotes[this.state.selectedQuoteIndex];
    return a;
  }

  selectQuoteIndex() {
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
    console.log('thisss', this.state.selectQuoteIndex);
    return (
      <div className="App" id="quote-box">
        { this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : "" }
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler}></Button>
      </div>
    );
  }
}

export default App;
