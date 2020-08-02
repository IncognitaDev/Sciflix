import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }

  @media(max-width: 800px){
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    outline: none;
    background-color: var(--primary);
    color: var(--white);
    text-align: center;
    border: 0;
    border-radius: 0;
  }
  
`;

export const SubmitButton = styled(Button)`
  background-color: var(--primary);
  margin-right: 20px;
  border: 0;

  @media (max-width: 800px){
    position: relative ;
  }
`

export const ClearButton = styled(SubmitButton)`
  background-color: var(--blackLighter);
  color: black;
`

export default Button;