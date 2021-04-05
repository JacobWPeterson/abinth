import React from 'react';
import styled, { keyframes } from 'styled-components';

import TweetBody from './TweetBody.jsx';
import Images from './Images.jsx';
import LinkPreview from './LinkPreview.jsx';

import followed from '../../../dummyData/followed.js';

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

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  width: max(30vw, 450px);
  min-height: 20vh;
  padding-top: max(10px, 2vh);
  padding-bottom: max(10px, 2vh);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);

  visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;
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
  // transform: scale(1.5);
  padding: 2px;
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

class TweetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      username: null,
      visible: true,
    };
    this.findAuthorName = this.findAuthorName.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.findAuthorName(this.props.tweet.author_id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.findAuthorName(this.props.tweet.author_id);
    }
  }

  findAuthorName(id) {
    followed.followed.forEach((account) => {
      if (account.id === id) {
        this.setState({
          name: account.name,
          username: account.username,
          profilePhoto: account.profile_image_url,
        });
      }
    });
  }

  clickHandler(event) {
    this.props.navigate(Number(event.target.id));
  }

  render() {
    const { tweet } = this.props;
    const { visible, profilePhoto, name } = this.state;
    if (this.state.name) {
      return (
        <Wrapper out={!visible} onClick={(event) => event.stopPropagation()}>
          <Card>
            <Box>
              <User>
                <ProfilePhoto src={profilePhoto} alt={`${this.state.name}`} />
                <Handles>
                  <Name>{name}</Name>
                  <Username target="_blank" rel="noreferrer" href={`https://twitter.com/${this.state.username}`}>{`@${this.state.username}`}</Username>
                </Handles>
              </User>
              <TweetBody tweet={tweet} />
              {tweet.entities && tweet.entities.urls && tweet.entities.urls[0].expanded_url.includes('https://twitter.com/') && <Images images={tweet} />}
              {tweet.entities && tweet.entities.urls && tweet.entities.urls[0].images
              && (
              <LinkPreview
                imageUrl={tweet.entities.urls[0].images[0].url}
                title={tweet.entities.urls[0].title}
                description={tweet.entities.urls[0].description}
                link={tweet.entities.urls[0].unwound_url}
              />
              )}
            </Box>
          </Card>
        </Wrapper>
      );
    }
    return <div />;
  }
}

export default TweetCard;
