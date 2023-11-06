import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoMoonOutline, IoMoon} from 'react-icons/io5';
import { Container } from './Container';

const HeaderElem = styled.header`
    box-shadow: var(--shadow);
    // background-color: var(--color-ui-base);
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;
const Title = styled(Link).attrs({
    to: '/',
})`
    color: var(--color-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    text-decoration: none;
`;

const SwitchMode = styled.div`;
    display: flex;
    color: var(--color-text);
    font-size: var(--fs-sm);
    text-transform: capitalize;
    cursor: pointer;
`;

export default function Header() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderElem>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <SwitchMode onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoonOutline size={'25px'} style={{alignSelf: 'center'}}/> : 
                        <IoMoon size={'25px'} style={{alignSelf: 'center'}}/>}
                        <span style={{paddingLeft: '10px'}}>{theme} theme</span>
                    </SwitchMode>
                </Wrapper>
            </Container>
        </HeaderElem>
    )
}
