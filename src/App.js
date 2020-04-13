import React from 'react';
import './App.css';
import quotes from './quotes';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

const bgList = ["https://images.unsplash.com/photo-1586188776026-6f98348e6eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1574&q=80", "https://images.unsplash.com/photo-1545334610-35dd6680f5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80", "https://images.unsplash.com/photo-1586022353946-5250dfc748d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: this.getRandomBackground(),
      quoteItem: this.getRandomQuote(),
      fadeBool: true
    };
  }

  handleNewQuoteClick = () => {
    this.setState(state => ({
      bg: this.getRandomBackground(),
      quoteItem: this.getRandomQuote(),
      fadeBool: !state.fadeBool
    }));
  }

  render() {
    const tweet = `https://twitter.com/intent/tweet?text=${this.state.quoteItem.quote}&hashtags=Random Quote,by ${this.state.quoteItem.author}`;
    return (<div className="App container-fluid h-100 p-0">
      <img src={this.state.bg} alt="Beautiful Background" className="bg-image w-100 h-100"/>
      <div id="quote-box" className="w-100 h-100 bg-transparent p-0 row">
        <SwitchTransition mode="out-in">
          <CSSTransition key={this.state.fadeBool} addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }} classNames="fade">
            <div id="quote-item" className="col-md-6 m-auto">
              <p id="text">{this.state.quoteItem.quote}</p>
              <p id="author" className="text-right">-{this.state.quoteItem.author}</p>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <button id="new-quote" onClick={this.handleNewQuoteClick} className="btn bg-transparent">NEW QUOTE
          <i className="fa fa-chevron-right"></i>
        </button>
        <a id="tweet-quote" href={tweet} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </div>);
  }

  getRandomBackground = () => {
    const bgIndex = Math.floor(Math.random() * bgList.length);
    return bgList[bgIndex];
  }

  getRandomQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
  }
}
export default App;
