import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
    padding: 20px 0;
    @media(min-width: 768px) {
        padding: 30px 0;
    }
`;

export default function Main({children}) {
  return (
    <Wrapper>
        <Container>
            {children}
        </Container>
    </Wrapper>
  )
}
