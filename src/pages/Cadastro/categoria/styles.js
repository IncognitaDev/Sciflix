import styled from 'styled-components'
import Button from '../../../components/Button'

const SubmitButton = styled(Button)`
  background-color: var(--primary);
  border: 0;

  @media (max-width: 800px){
    position: relative ;
  }
`
export default  SubmitButton;