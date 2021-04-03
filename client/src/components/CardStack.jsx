import React from 'react';
import styled from 'styled-components';
import TweetCard from './TweetCard.jsx';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: max(30vw, 400px);
  height: 65vh;
`;

class CardStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(value) {
    if (this.state.index + value === this.props.tweets.length) {
      this.props.closeDeck();
    } else {
      this.setState((prevState) => ({ index: prevState.index + value }));
    }
  }

  render() {
    return (
      <Wrapper>
        <TweetCard tweet={this.props.tweets[this.state.index]} navigate={this.changeIndex} />
      </Wrapper>
    );
  }
}

export default CardStack;
