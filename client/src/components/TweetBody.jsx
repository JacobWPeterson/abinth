import React, { useState, useEffect } from 'react';
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

const TweetBody = ({ tweet: { text, entities } }) => {
  const [textToRender, setTextToRender] = useState(null);

  const findAltURLsForLink = (url) => {
    if (url[url.length - 1] === '.') {
      url = url.slice(0, url.length - 1);
    }
    const urlArray = entities.urls;
    for (let i = 0; i < urlArray.length; i += 1) {
      if (url === urlArray[i].url) {
        return { index: i, altURLS: urlArray[i] };
      }
    }
    return null;
  };

  const isOutsideLinkWithoutRelatedImages = (index) => {
    const urlAttributes = entities.urls[index];
    return !urlAttributes.expanded_url.includes('https://twitter.com/') && !urlAttributes.images;
  };

  const dissectTweet = async (callback) => {
    let words = text.split(' ');
    const lastWord = words[words.length - 1];
    if (lastWord.includes('http') && lastWord.indexOf('http') !== 0) {
      const word1 = lastWord.substring(0, lastWord.indexOf('http'));
      const word2 = lastWord.substring(lastWord.indexOf('http'));
      words[words.length - 1] = word1;
      words.push(word2);
    }
    words = words.map((word) => {
      if (word.match(urlPattern) && word === lastWord) {
        const altURLSAndIndex = findAltURLsForLink(word);
        if (isOutsideLinkWithoutRelatedImages(altURLSAndIndex.index)) {
          return word;
        }
      } else if (word === '&amp;') {
        return '&';
      } else {
        return word;
      }
    });
    callback(words.join(' '));
  };

  useEffect(() => {
    dissectTweet((words) => setTextToRender(words));
  });

  if (textToRender) {
    return (
      <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
        <a target="blank" style={{ color: '#1DA1F2' }} href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}
      >
        <Text>{textToRender}</Text>
      </Linkify>
    );
  }
  return <div />;
};

export default TweetBody;
