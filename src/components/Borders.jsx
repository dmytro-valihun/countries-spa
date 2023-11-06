import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { filterByCountry } from '../links';

const Border = styled.div`
    font-size: 14px;
    line-height: 15px;
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px 0;
    border-radius: 5px;
    display: flex; 
    justify-content: center;
    box-shadow: var(--shadow);
`;

export default function Borders({details, params, render, setRender}) {

    const navigate = useNavigate();
    const filteredCountry = details.filter(country => country.name.common === params.name);
    const [countryWithBorders, setCountryWithBorders] = useState('');

    useEffect(() => {
        if (filteredCountry[0].borders) {
            axios.get(filterByCountry(filteredCountry[0].borders))
            .then(({data}) => setCountryWithBorders(data.map(country => country.name.common)))
        }
        //eslint-disable-next-line
    }, [render])

    function handleClick(border) {
        navigate(`/country/${border}`);
        setRender(Date.now());
    }

  return (
    <>
        {countryWithBorders ? 
        countryWithBorders.map(border => <Border key={border} onClick={handleClick.bind(null, border) } >{border}</Border>) :
        <div>There is no borders</div>}
    </>
  )
}
