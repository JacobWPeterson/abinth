import React from 'react';
import TweetCard from './TweetCard.jsx';

class CardStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(value) {
    this.setState((prevState) => ({ index: prevState.index + value }));
  }

  render() {
    return <TweetCard tweet={this.props.tweets[this.state.index]} navigate={this.changeIndex} />;
  }
}

export default CardStack;
