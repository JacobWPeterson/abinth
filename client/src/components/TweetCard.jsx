import React from 'react';
import styled, { keyframes } from 'styled-components';

import TweetBody from './TweetBody.jsx';
import Images from './Images.jsx';
import LinkPreview from './LinkPreview.jsx';

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  margin: 5vh auto 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  width: 95%;
  min-height: 20vh;
  padding-top: max(10px, 2vh);
  padding-bottom: max(10px, 2vh);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  animation: ${fadeIn} 1s linear;
  transition: visibility 1s linear;

  @media (min-width: 313px) {
    margin: 0 auto;
  }

  @media (min-width: 450px) {
    width: max(30vw, 450px);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 90%;
  max-width: 90%;
  height: 80%;
  max-height: 80%;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
`;

const ProfilePhoto = styled.img`
  border-radius: 50%;
  height: 8vh;
  margin-right: .5vw;
  border: 3px solid #e0e0e0;
  &:hover { border: 3px solid #cccccc; };
`;

const Handles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Name = styled.div`
  font-weight: 400;
`;

const Username = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 300;
  font-style: italic;
  font-size: .9rem;
  &:hover { color: #1DA1F2; };
`;

const TweetCard = ({ tweet: { bestTweet, user }, screenSize }) => (
  <Wrapper onClick={(event) => event.stopPropagation()}>
    <Card>
      <Box>
        <User>
          <ProfilePhoto src={user.profile_image_url.replace('normal', '200x200')} alt={`${user.name}`} />
          <Handles>
            {screenSize > 313
                   && <Name>{user.name}</Name> }
            <Username target="_blank" rel="noreferrer" href={`https://twitter.com/${user.username}`}>{`@${user.username}`}</Username>
          </Handles>
        </User>

        <TweetBody tweet={bestTweet} />

        {screenSize > 313 && bestTweet.entities
              && bestTweet.entities.urls && bestTweet.entities.urls[0].expanded_url.includes('https://twitter.com/')
              && <Images images={bestTweet} />}

        {screenSize > 313 && bestTweet.entities
              && bestTweet.entities.urls && bestTweet.entities.urls[0].images
              && (
              <LinkPreview
                imageUrl={bestTweet.entities.urls[0].images[0].url}
                title={bestTweet.entities.urls[0].title}
                description={bestTweet.entities.urls[0].description}
                link={bestTweet.entities.urls[0].unwound_url}
              />
              )}
      </Box>
    </Card>
  </Wrapper>
);

export default TweetCard;
