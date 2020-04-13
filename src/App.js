import React from 'react';
import './App.css';
import quotes from './quotes';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

const bgList = [
  "https://images.unsplash.com/photo-1586188776026-6f98348e6eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1574&q=80",
  "https://images.unsplash.com/photo-1545334610-35dd6680f5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1586022353946-5250dfc748d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1586201254457-6a877c6dbdf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1536692546400-ac0af3f293fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1525296617350-d87d218737aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1585766765962-28aa4c7d719c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1480286045084-7377297185aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
  "https://images.unsplash.com/photo-1584712901203-1aad86cf2c3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1502318217862-aa4e294ba657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1558&q=80",
  "https://images.unsplash.com/photo-1537177080923-1fb15084a8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
  "https://images.unsplash.com/photo-1530274094325-2cb8dd188df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1578763918454-d0deb5469071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
  "https://images.unsplash.com/photo-1517826723985-0567c901f530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1514327567052-1eed4e4902c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1504874025105-10b793541c2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1509895018477-cd21de599beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80"
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: this.getRandomBackground(),
      quoteItem: this.getRandomQuote(),
      fadeSwitch: true,
      prevBg: this.getRandomBackground()
    };
  }

  handleNewQuoteClick = () => {
    const newBg = this.getRandomBackground();
    this.setState(state => ({
      bg: newBg,
      quoteItem: this.getRandomQuote(),
      fadeSwitch: !state.fadeSwitch,
      prevBg: state.bg
    }));
  }

  render() {
    const bg1 = this.state.fadeSwitch
      ? this.state.prevBg
      : this.state.bg;
    const bg2 = this.state.fadeSwitch
      ? this.state.bg
      : this.state.prevBg;
    const topImgStyle = {
      opacity: this.state.fadeSwitch
        ? "1"
        : "0"
    };
    const tweet = `https://twitter.com/intent/tweet?text=${this.state.quoteItem.quote}&hashtags=Random Quote,by ${this.state.quoteItem.author}`;
    return (<div className="App container-fluid h-100 p-0">
      <img src={bg1} alt="Beautiful Background" className="bg-image w-100 h-100"/>
      <img src={bg2} alt="Beautiful Background" className="bg-image w-100 h-100" style={topImgStyle}/>
      <div id="quote-box" className="w-100 h-100 bg-transparent p-0 row">
        <SwitchTransition mode="out-in">
          <CSSTransition key={this.state.fadeSwitch} addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }} classNames="fade">
            <div id="quote-item" className="col-md-6 m-auto">
              <p id="text">{this.state.quoteItem.quote}</p>
              <p id="author" className="text-right">- {this.state.quoteItem.author}</p>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <button id="new-quote" onClick={this.handleNewQuoteClick} className="btn bg-transparent">{"NEW QUOTE "}
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
