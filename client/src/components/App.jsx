import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.img`
  position: relative;
  margin: -10px auto 0 auto;
  height: 15vh;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Main>
        <Banner src="./images/abinth_banner.jpg" alt="abinth: all news, no comments banner" />
      </Main>
    );
  }
}

export default App;
