import styled from 'styled-components';
import select from 'react-select';

export const Select = styled(select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text',
            padding: '10px',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--color-text)',
            backgroundColor: 'var(--color-bg)',
        })
    },
})`
    min-width: 200px;
    & * {color: var(--color-text) !important};
    & * {border: none !important};
    & > div[id] {
        background-color: var(--color-bg)
    }
`;