import React from 'react';
import Linkify from 'react-linkify';

import styled from 'styled-components';

const urlPattern = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s/?.#]+\.?)+(\/[^\s]*)?$/i;

const Text = styled.p`
  margin: 0;
  font-size: .9rem;
  line-height: 1rem;

  @media (min-width: 313px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

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
        console.log('word ', word);
        const altURLSAndIndex = this.findAltURLsForLink(word);
        // console.log('alt ', altURLSAndIndex);
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
    if (url[url.length - 1] === '.') {
      url = url.slice(0, url.length - 1);
    }
    console.log(url)
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
          <Text>{this.state.textToRender}</Text>
        </Linkify>
      );
    }
    return <div />;
  }
}

export default TweetBody;
