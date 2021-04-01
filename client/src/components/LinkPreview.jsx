import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Wrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: inherit;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  margin: 1vh 0 0 0;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 28vh;
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
`;
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 95%;
  height: auto;
  padding: .5vh 0;
  overflow: hidden;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1rem;
  margin: .5vh 0;
`;

const Description = styled.div`
  font-color: #aeaeae;
  font-weight: 300;
  font-size: .9rem;
  line-height: 1.1rem;
`;

const LinkArea = styled.div`
  color: #1DA1F2;
  font-weight: 300;
  font-size: .9rem;
  display: flex;
`;

const Icon = styled.div`
  color: #6d6d6d;
  margin-right: .25vw;
  transform: rotate(90deg);
`;

const LinkPreview = ({
  imageUrl, title, description, link,
}) => (
  <Wrapper target="_blank" rel="noreferrer" href={link}>
    <ImageContainer>
      <Image src={imageUrl} alt="link preview" />
    </ImageContainer>
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LinkArea>
        <Icon>
          <FontAwesome name="fas fa-link" />
        </Icon>
        { link.includes('.com') && link.substring(link.indexOf('www.'), link.indexOf('.com') + 4)}
        { !link.includes('.com') && link}
      </LinkArea>
    </Content>
  </Wrapper>
);

export default LinkPreview;
