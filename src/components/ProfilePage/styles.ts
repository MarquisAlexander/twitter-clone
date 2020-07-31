import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background-image: url("data:image/jpeg;base64,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");
  background-size: 100%;

  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background-image: url("https://avatars1.githubusercontent.com/u/51330232?s=460&u=6ba8934526e00197814cbcb559bf3cbff771b565&v=4");
  background-size: 100%;
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
