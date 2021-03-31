import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import followed from '../../../dummyData/followed.js';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40vw;
  min-width: 400px;
  min-height: 20vh;
  // max-height: 60vh;
  padding-top: max(10px, 2vh);
  padding-bottom: max(10px, 2vh);
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
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

const Username = styled.div`
  font-weight: 300;
  font-style: italic;
`;

const Body = styled.div`
  font-weight: 300;
`;

class TweetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      username: null,
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
        <Wrapper>
          <LeftArrow onClick={this.clickHandler}><FontAwesome id="-1" name="chevron-left" /></LeftArrow>
          <Card>
            <Box>
              <User>
                <ProfilePhoto src={this.state.profilePhoto} alt={`${this.state.name}`} />
                <Handles>
                  <Name>{this.state.name}</Name>
                  <Username>{`@${this.state.username}`}</Username>
                </Handles>
              </User>
              <Body>{this.props.tweet.text}</Body>
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
