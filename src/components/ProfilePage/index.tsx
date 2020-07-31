import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Marquis Alexander</h1>
        <h2>@marquis_santos</h2>

        <p>
          Developer at <a href="https://github.com/MarquisAlexander">@faztSoftware</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Barra de Maxaranguape, RN, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de agosto de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>24 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
