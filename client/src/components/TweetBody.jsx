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

function renderText(text) {
  const parts = text.split(urlPattern);
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = <a key={`link${i}`} href={parts[i]}>{parts[i]}</a>;
  }
  return parts;
}

const findURL = (url) => {
  const urlStartIndex = url.indexOf('https://');
  let foundUrl = url.slice(urlStartIndex);
  const foundUrlEndIndex = foundUrl.indexOf('"');
  foundUrl = foundUrl.slice(0, foundUrlEndIndex);
  return foundUrl;
};

const isTwitterLink = (link) => (link.includes('https://twitter.com/'));

class TweetBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textToRender: null,
    };
    this.dissectTweet = this.dissectTweet.bind(this);
  }

  componentDidMount() {
    this.dissectTweet(this.props.text, (words) => this.setState({
      textToRender: words,
    }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.dissectTweet(this.props.text, (words) => this.setState({
        textToRender: words,
      }));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async dissectTweet(text, callback) {
    let words = text.split(' ');
    const lastWord = words[words.length - 1];
    if (lastWord.includes('http') && lastWord.indexOf('http') !== 0) {
      const word1 = lastWord.substring(0, lastWord.indexOf('http'));
      const word2 = lastWord.substring(lastWord.indexOf('http'));
      words[words.length - 1] = word1;
      words.push(word2);
    }
    words = words.filter((word) => {
      if (word.match(urlPattern)) {
        resolveURI(word).then((x) => {
          // console.log(x.data);
          const foundUrl = findURL(x.data);
          if (!isTwitterLink(foundUrl)) {
            console.log('OutsideURL: ', word);
            return word;
          }
        });
      } else {
        return word;
      }
    });
    console.log('joined ', words.join(' '));
    callback(words.join(' '));
    // console.log(this.state.textToRender);
  }

  render() {
    if (this.state.textToRender) {
      return <div className="some_text_class">{this.props.text}</div>;
    }
    return <div />;
  }
}

// const urlPattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#]+\.?)+(\/[^\s]*)?$/i;

// // function linkify(text) {
// eslint-disable-next-line max-len
// //   const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
// //   return text.replace(urlRegex, (url) => <URL href={url} target="_blank">{`${url}`}</URL>);
// // }

// function renderText(text) {
//   const parts = text.split(urlPattern);
//   for (let i = 1; i < parts.length; i += 2) {
//     parts[i] = <a key={`link${i}`} href={parts[i]}>{parts[i]}</a>;
//   }
//   return parts;
// }

// const findURL = (url) => {
//   const urlStartIndex = url.indexOf('https://');
//   let foundUrl = url.slice(urlStartIndex);
//   const foundUrlEndIndex = foundUrl.indexOf('"');
//   foundUrl = foundUrl.slice(0, foundUrlEndIndex);
//   return foundUrl;
// };

// const isTwitterLink = (link) => (link.includes('https://twitter.com/'));

// const TweetBody = ({ text }) => {
//   let words = text.split(' ');
//   words = words.filter((word) => {
//     if (word.match(urlPattern)) {
//       resolveURI(word).then((x) => {
//         // console.log(x.data);
//         const foundUrl = findURL(x.data);
//         if (!isTwitterLink(foundUrl)) {
//           console.log('OutsideURL: ', word);
//           return word;
//         }
//       });
//     } else {
//       return word;
//     }
//   });
//   console.log('words: ', words);
//   // const editedText = renderText(filteredTextBody.join(' '));
//   return (
//     <div className="some_text_class">{text}</div>
//   );
// };

export default TweetBody;
