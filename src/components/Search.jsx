import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5'


const InputContainer = styled.label`
    background-color: var(--color-bg);
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;
    max-width: 100%;
    box-shadow:  var(--shadow);
    @media(min-width: 768px) {
        margin-bottom: 0;
        width: 350px;
    }
`;
const InputSearch = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
    margin-left: 15px;
    background-color: var(--color-bg);
    color: var(--color-text);
    border: none;
    outline: none;
    width: 100%
`;



export default function Search({search, setSearch}) {

  return (
    <InputContainer>
        <IoSearchOutline />
        <InputSearch onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}
