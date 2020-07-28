import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Marquis Alexander</strong>
                  <span>539 Tweets</span>
              </ProfileInfo>
          </Header>

          {/* <ProfilePage /> */}

          {/* <BottomMenu>
              <HomeIcon />
              <SeachIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu> */}
          
      </Container>
  );
}

export default Main;