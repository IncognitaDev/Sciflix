import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  background-image: ${({url}) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: inline-block;
  height: 197px;
  width: 298px;
  margin-right: 16px;
  transition: .5s;

  &:hover,
  &:focus{
    transform: scale(1.2);
  }

  &::after {
    content: attr(title) ;
    display: inline-block;
    margin-top: 120px;
    margin-left: 30px;
    font-weight: bold;
  }
`;
