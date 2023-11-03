import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        padding: 15px 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export default function ListOfCountries({children}) {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}