import React from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

import CardStack from './CardStack.jsx';

const Main = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #424242;
  font-size: 1.2rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.img`
  position: relative;
  margin: 0px auto 5vh auto;
  height: 15vh;
`;

const Display = styled.div`
  margin-top: 5vh;
  text-decoration: none;
  padding: 1vh 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2vh 0;
`;

const Greeting = styled.p`
  margin: 0 auto;
  font-size: 1.75rem;
`;

const DeckInfo = styled.p`
  margin: 0 auto;
  font-size: 1.1rem;
`;

const ring = keyframes`
  0% {
    z-index: 0;
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    z-index: 0;
    width: 300px;
    height: 300px;
    opacity: 0;
  }
`;

const Button = styled.button`
  min-width: 300px;
  min-height: 7vh;
  font: inherit;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #E7E6E6;
  background: #1DA1F2;
  // background: radial-gradient(ellipse at center, rgba(79,182,255,1) 0%, rgba(29,161,242,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(29,161,242,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  &:hover, .button:focus {
    color: #313133;
    transform: translateY(-6px);
  }

  &:after {
    content: '';
    width: 30px; height: 30px;
    border-radius: 100%;
    border: 6px solid #1DA1F2;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ring} 1.5s infinite;
    animation-play-state: ${(props) => (props.ringIt ? 'running' : 'paused')};
    display: ${(props) => (props.ringIt ? 'inline' : 'none')};
  };
`;

const Closing = styled.p`
  margin: 0 auto;
  font-size: 1.75rem;
  padding: 0 0 2vh 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
      greetingOn: true,
      deckOpen: false,
      deckFinished: false,
      greeting: 'Good morning!',
    };
    this.getTweets = this.getTweets.bind(this);
    this.closeDeck = this.closeDeck.bind(this);
  }

  componentDidMount() {
    this.getTweets();
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 16) {
      this.setState({ greeting: 'Good afternoon!' });
    } else if (hour >= 16 && hour < 20) {
      this.setState({ greeting: 'Good evening!' });
    } else if (hour >= 20 && hour <= 24) {
      this.setState({ greeting: 'Hey there!' });
    }
  }

  getTweets() {
    axios.get('/tweets')
      .then((response) => {
        this.setState({ tweets: response.data });
      })
      .catch((error) => {
        throw error;
      });
  }

  closeDeck() {
    this.setState({ deckOpen: false, deckFinished: true });
  }

  render() {
    const {
      greeting, tweets, greetingOn, deckOpen, deckFinished,
    } = this.state;
    return (
      <Main>
        <Banner src="./images/alt_abinth_banner.png" alt="abinth: all news, no comments banner" height="137" width="897" />
        {tweets && greetingOn && !deckOpen && (
        <Display>
          <Message>
            <Greeting>{greeting}</Greeting>
            <DeckInfo>
              You have
              {' '}
              {tweets.length}
              {' '}
              cards today
            </DeckInfo>
          </Message>
          <Button
            ringIt={greetingOn}
            onClick={() => this.setState({ greetingOn: false, deckOpen: true })}
          >
            Get caught up
          </Button>
        </Display>
        )}
        {deckOpen && (
          <CardStack closeDeck={this.closeDeck} tweets={tweets} />
        )}
        {deckFinished && (
          <Display>
            <Closing>All caught up!</Closing>
            <Button onClick={() => this.setState({ deckFinished: false, deckOpen: true })}>
              Start Over?
            </Button>
          </Display>
        )}
      </Main>
    );
  }
}

export default App;
