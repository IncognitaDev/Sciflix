import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  height: 80vh;
  color: var(--white);
  background-image: ${({backgroundImage}) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  box-shadow:inset 2000px 0 0 0 rgba(0,0,0,0.9);

  @media(max-width: 800px){
    height: auto;
    min-height: 50vh;
  }
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  margin-right: 5%;
  margin-left: 5%;
  height: 100%;

  @media(max-width: 800px){
      padding-top: 100px;
      flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;

  @media(max-width: 800px){
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`  
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0 ;
  margin-bottom: 32px;

  @media(max-width: 800px){
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`

  @media(max-width: 800px){
    display: none;
  }

`;

ContentAreaContainer.Title = styled.h2`

`;


export const WatchButton = styled.button`
  display: none;
  cursor: pointer;
  padding:16px 24px;
  font-weight: bold;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  border-radius: 4px;
  color: var(--black);
  background-color: var(--white);

  @media(max-width: 800px){
    display: block;
  }
`;