import React from 'react';
import styled from 'styled-components';
import Linkify from 'react-linkify';

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

const urlPattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s/?.#]+\.?)+(\/[^\s]*)?$/i;

class TweetBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textToRender: null,
    };
    this.dissectTweet = this.dissectTweet.bind(this);
    this.findAltURLsForLink = this.findAltURLsForLink.bind(this);
    this.isOutsideLinkWithoutAssociatedImages = this.isOutsideLinkWithoutAssociatedImages.bind(this);
  }

  componentDidMount() {
    this.dissectTweet(this.props.tweet.text, (words) => this.setState({
      textToRender: words,
    }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.dissectTweet(this.props.tweet.text, (words) => this.setState({
        textToRender: words,
      }));
    }
  }

  async dissectTweet(text, callback) {
    let words = text.split(' ');
    const lastWord = words[words.length - 1];
    if (lastWord.includes('http') && lastWord.indexOf('http') !== 0) {
      const word1 = lastWord.substring(0, lastWord.indexOf('http'));
      const word2 = lastWord.substring(lastWord.indexOf('http'));
      words[words.length - 1] = word1;
      words.push(word2);
    }
    words = words.map((word) => {
      if (word.match(urlPattern)) {
        const altURLSAndIndex = this.findAltURLsForLink(word);
        if (this.isOutsideLinkWithoutAssociatedImages(altURLSAndIndex.index)) {
          return word;
        }
      } else {
        return word;
      }
    });
    callback(words.join(' '));
  }

  findAltURLsForLink(url) {
    const urlArray = this.props.tweet.entities.urls;
    for (let i = 0; i < urlArray.length; i += 1) {
      if (url === urlArray[i].url) {
        return { index: i, altURLS: urlArray[i] };
      }
    }
    return null;
  }

  isOutsideLinkWithoutAssociatedImages(index) {
    const urlAttributes = this.props.tweet.entities.urls[index];
    return !urlAttributes.expanded_url.includes('https://twitter.com/') && !urlAttributes.images;
  }

  render() {
    if (this.state.textToRender) {
      return (
        <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="blank" style={{ color: '#1DA1F2' }} href={decoratedHref} key={key}>
            {decoratedText}
          </a>
        )}
        >
          {this.state.textToRender}
        </Linkify>
      );
    }
    return <div />;
  }
}

export default TweetBody;
