import React from 'react';
import styled from 'styled-components';

const Banner = styled.img`
  height: 5vh;
  widht: 80vw;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'abinth',
    };
  }

  render() {
    return (
      <div>
        <Banner src="../dist/Banner.png" alt="abinth: all news, no comments banner" />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
