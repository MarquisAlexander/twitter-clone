import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Marquis Alexander</h1>
              <h2>@marquis_alexander</h2>

              <p>
                  Developer at <a href="https://google.com">@google</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Barra de Maxaranguape, RN, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 21 de julho de 2000
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>94</strong>
                  </span>
                  <span>
                      <strong>94 </strong>seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;