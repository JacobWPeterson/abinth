import React from 'react';
import styled from 'styled-components';
import TweetCard from './TweetCard.jsx';

const ClickArea = styled.div`
  position: absolute;
  margin: auto;
  top: 18vh;
  left: 0;
  width: 100%;
  height: 82vh;
`;

class CardStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex() {
    if (this.state.index + 1 === this.props.tweets.length) {
      this.props.closeDeck();
    } else {
      this.setState((prevState) => ({ index: prevState.index + 1 }));
    }
  }

  render() {
    return (
      <ClickArea onClick={this.changeIndex}>
        <TweetCard tweet={this.props.tweets[this.state.index]}/>
      </ClickArea>
    );
  }
}

export default CardStack;
