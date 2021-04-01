import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CardStack from './CardStack.jsx';

const Main = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #424242;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.img`
  position: relative;
  margin: 0px auto 5vh auto;
  height: 15vh;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
    };
    this.getTweets = this.getTweets.bind(this);
  }

  componentDidMount() {
    this.getTweets();
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

  render() {
    return (
      <Main>
        <Banner src="./images/alt_abinth_banner.png" alt="abinth: all news, no comments banner" />
        {this.state.tweets && (
          <CardStack tweets={this.state.tweets} />
        )}
      </Main>
    );
  }
}

export default App;
