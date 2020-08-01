import styled from 'styled-components';

const VideoCardContainer = styled.a`
  border: 2px solid;
  background-image: ${({url}) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: inline-block;
  height: 170px;
  width: 298px;
  margin-right: 16px;
  transition: .9s;

  &:hover,
  &:focus{
    transform: scale(1.2);
    &::after {
      display: inline-block;
    }
  }

  &::after {
    content: attr(title) ;
    display: none;
    margin-top: 120px;
    margin-left: 30px;
    font-weight: bold;
  }
`;

export default VideoCardContainer ;