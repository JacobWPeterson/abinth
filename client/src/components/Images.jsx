import React from 'react';
import styled from 'styled-components';

const Viewer = styled.div`
  width: 100%;
  height: 25vh;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  margin: 1vh 0 0 0;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

/* This could have been rendered directly from the parent component but was built to
account for access to the API endpoint that returns media urls */
const Images = ({ images }) => <Viewer><Image src="./images/abinth_logo.png" /></Viewer>;

export default Images;
