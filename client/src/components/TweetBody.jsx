import React from 'react';
import styled from 'styled-components';
import resolveURI from '../../../server/resolveURI.js';

const Body = styled.div`
  font-weight: 300;
`;

const URL = styled.a`
  &:hover {
    color: #56b8f5;
    transform: scale(1.1);
    cursor: pointer;
  };
`;
const urlPattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#]+\.?)+(\/[^\s]*)?$/i;

// function linkify(text) {
//   const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
//   return text.replace(urlRegex, (url) => <URL href={url} target="_blank">{`${url}`}</URL>);
// }

// function renderText(text) {
//   const parts = text.split(urlRegex);
//   for (let i = 1; i < parts.length; i += 2) {
//     parts[i] = <a key={`link${i}`} href={parts[i]}>{parts[i]}</a>;
//   }
//   return parts;
// }

const TweetBody = ({ text }) => {
  const words = text.split(' ');
  words.forEach((word) => {
    if (word.match(urlPattern)) {
      resolveURI(word).then((x) => x.data).then(console.log);
      // resolveURI(word, (x) => { console.log(x); });
    }
  });
  // const editedText = renderText(text);
  return (
    <div className="some_text_class">{text}</div>
  );
};

export default TweetBody;
