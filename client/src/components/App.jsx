import React, { Suspense } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const CardStack = React.lazy(() => import('./CardStack.jsx'));

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
  margin: auto;
  height: 15vh;

  @media (min-width: 313px) {
    margin: -10px auto 5vh auto;
  }
`;

const Display = styled.div`
  margin-top: 15vh;
  text-decoration: none;
  padding: 1vh 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 313px) {
    margin-top: 5vh;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2vh 0;
`;

const Greeting = styled.p`
  margin: 0 auto;
  font-size: 1.5rem;

  @media (min-width: 313px) {
    font-size: 1.75rem;
  }
`;

const DeckInfo = styled.p`
  margin: 0 auto;
  font-size: .9rem;

  @media (min-width: 313px) {
    font-size: 1.1rem;
  }
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
  margin: auto;
  animation: none;
  width: 70vw;
  min-height: 7vh;
  font: inherit;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  background: #1DA1F2;
  border: none;
  border-radius: 100px;
  box-shadow: 12px 12px 24px rgba(29,161,242,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;


  @media (min-width: 313px) {
    width: 300px;
    font-size: 22px;
    letter-spacing: 1.3px;

    &:hover, .button:focus {
      color: #313133;
      transform: translateY(-6px);
    }

    &:after {
      content: '';
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 6px solid #1DA1F2;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: 1.5s 3 both ${ring};
      // animation-play-state: ${(props) => (props.ringIt ? 'running' : 'paused')};
      display: ${(props) => (props.ringIt ? 'inline' : 'none')};
    };
  }
`;

const Closing = styled.p`
  margin: 0 auto;
  font-size: 1.5rem;
  padding: 0 0 10vh 0;

  @media (min-width: 313px) {
    margin: 0 auto;
    font-size: 1.75rem;
    padding: 0 0 2vh 0;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
      screenSize: null,
      greetingOn: true,
      deckOpen: false,
      deckFinished: false,
      greeting: 'Good morning!',
    };
    this.getTweets = this.getTweets.bind(this);
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.closeDeck = this.closeDeck.bind(this);
  }

  componentDidMount() {
    this.getTweets();
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 16) {
      this.setState({ greeting: 'Good afternoon!' });
    } else if (hour >= 16 && hour < 20) {
      this.setState({ greeting: 'Good evening!' });
    } else if (hour >= 20 && hour <= 24) {
      this.setState({ greeting: 'Hey there!' });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  updateScreenSize() {
    this.setState({ screenSize: window.innerWidth });
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
      greeting, screenSize, tweets, greetingOn, deckOpen, deckFinished,
    } = this.state;
    return (
      <Main>
        {screenSize <= 313 &&
        <Banner src="./images/abinth_watch_banner.png" alt="abinth: all news, no comments banner" height="37" width="162"/> }
        {screenSize > 313 && screenSize < 897  &&
        <Banner src="./images/abinth_stacked_banner.png" alt="abinth: all news, no comments banner" height="137" width="313" /> }
        {screenSize > 897 &&
        <Banner src="./images/alt_abinth_banner.png" alt="abinth: all news, no comments banner" height="137" width="897" /> }
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
        <Suspense fallback={<div>Loading...</div>}>
          {deckOpen && (
          <CardStack screenSize={screenSize} closeDeck={this.closeDeck} tweets={tweets} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {deckFinished && (
          <Display>
            <Closing>All caught up!</Closing>
            <Button onClick={() => this.setState({ deckFinished: false, deckOpen: true })}>
              Start Over?
            </Button>
          </Display>
          )}
        </Suspense>
      </Main>
    );
  }
}

export default App;
