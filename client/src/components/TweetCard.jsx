import React from 'react';
import styled, { keyframes } from 'styled-components';
import FontAwesome from 'react-fontawesome';

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
  position: relative;
  display: flex;
  align-items: center;
  width: max(30vw, 400px);
  min-height: 20vh;
  // max-height: 60vh;
  padding-top: max(10px, 2vh);
  padding-bottom: max(10px, 2vh);
  border-radius: 10px;
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

const LeftArrow = styled.div`
  color: #1DA1F2;
  font-size: 1.75rem;
  z-index: 1;
  position: absolute;
  left: -25px;
  &:hover {
    color: #56b8f5;
    transform: scale(1.1);
  };
`;

const RightArrow = styled.div`
  color: #1DA1F2;
  font-size: 1.75rem;
  z-index: 1;
  position: absolute;
  right: -25px;
  &:hover {
    color: #56b8f5;
    transform: scale(1.1);
  };
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
    if (this.state.name) {
      return (
        <Wrapper out={!this.state.visible}>
          <LeftArrow onClick={this.clickHandler}><FontAwesome id="-1" name="chevron-left" /></LeftArrow>
          <Card>
            <Box>
              <User>
                <ProfilePhoto src={this.state.profilePhoto} alt={`${this.state.name}`} />
                <Handles>
                  <Name>{this.state.name}</Name>
                  <Username target="_blank" rel="noreferrer" href={`https://twitter.com/${this.state.username}`}>{`@${this.state.username}`}</Username>
                </Handles>
              </User>
              <TweetBody out={!this.state.visible} tweet={this.props.tweet} />
              {this.props.tweet.entities.urls[0].expanded_url.includes('https://twitter.com/') && <Images images={this.props.tweet} />}
              {this.props.tweet.entities.urls[0].images
              && (
              <LinkPreview
                imageUrl={this.props.tweet.entities.urls[0].images[0].url}
                title={this.props.tweet.entities.urls[0].title}
                description={this.props.tweet.entities.urls[0].description}
                link={this.props.tweet.entities.urls[0].unwound_url}
              />
              )}
            </Box>
          </Card>
          <RightArrow onClick={this.clickHandler}><FontAwesome id="1" name="chevron-right" /></RightArrow>
        </Wrapper>
      );
    }
    return <div />;
  }
}

// const findAuthorName = (id) => {
//   followed.followed.forEach((account) => {
//     if (account.id === id) {
//       return account.name;
//     }
//   });
// };
// const TweetCard = ({ tweet, navigate }) => {
//   const name = 'ESPN' || findAuthorName(tweet.author_id);
//   return (
//     <Wrapper>
// eslint-disable-next-line max-len
//       <LeftArrow onClick={(event) => navigate(Number(event.target.id))}><FontAwesome id="-1" name="chevron-left" /></LeftArrow>
//       <Card>
//         <Box>
//           <div>{name}</div>
//           <Body>{tweet.text}</Body>
//         </Box>
//       </Card>
// eslint-disable-next-line max-len
//       <RightArrow onClick={(event) => navigate(Number(event.target.id))}><FontAwesome id="1" name="chevron-right" /></RightArrow>
//     </Wrapper>
//   );
// };

export default TweetCard;
