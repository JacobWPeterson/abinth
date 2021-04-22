import React, { useState } from 'react';
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

const CardStack = ({ screenSize, closeDeck, tweets }) => {
  const [index, setIndex] = useState(10);

  const changeIndex = () => {
    if (index + 1 === tweets.length) {
      closeDeck();
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <ClickArea onClick={changeIndex}>
      <TweetCard screenSize={screenSize} tweet={tweets[index]} />
    </ClickArea>
  );
};

export default CardStack;
