import { useState, useEffect } from 'react'
import Search from "./Search";
import styled from 'styled-components'
import { Select } from './Select';

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'Americas', label: 'Americas'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export default function Controls({onSearch}) {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
        // eslint-disable-next-line
    }, [search, region])

  return (
    <Wrapper>
        <Search search={search} setSearch={setSearch} />
        <Select 
            options={options}
            placeholder='Filter by region'
            isClearable
            isSearchable={false}
            region={region}
            onChange={setRegion}
        />
    </Wrapper>
  )
}
