import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';

const Btn = styled.div`
    border: 1px solid black;
    cursor: pointer;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    width: 140px;
    color: var(--color);
    border-radius: 5px;
    box-shadow: var(--shadow);
`;


export default function BtnBack() {
    const getBack = () => {
        window.history.back()
    }
  return (
    <Btn onClick={getBack}><IoArrowBack size={'20px'} style={{marginRight:'10px'}}/>Get back</Btn>
  )
}
