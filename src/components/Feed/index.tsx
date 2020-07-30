import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets  } from './styles';

const Feed: React.FC = () => {
  return (
      <Container>
          <Tab>Tweets</Tab>

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
      </Container>
  );
}

export default Feed;
