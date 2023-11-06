import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CardImage from '../components/CardImage';
import { ALL_COUNTRIES_DETAILED_INFO } from '../links';
import BtnBack from '../components/BtnBack';
import Borders from '../components/Borders';

const Article = styled.article`
  padding: 50px 0;
`;
const Wrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const WrapperImg = styled.div`
@media (min-width: 992px) {
  width: 50%;
  order: 1
}
`;
const Title = styled.h2`
  text-align: center;
  @media (min-width: 992px) {
    order: 0;
    width: 100%;
  }
`;
const Lists = styled.div`
  box-shadow: var(--shadow);
  padding: 20px 0;
  line-height: 25px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 100px;
  };
  @media (min-width: 992px) {
    align-items: center;
    padding: 0 20px;
    width: 50%;
    order: 1;
    gap: 30px;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  list-style: none;
`;

export default function Details({countries, setBorders}) {
  const params = useParams();
  const [details, setDetails] = useState('' || []);
  const [render, setRender] = useState('');
  const filteredCountry = details.filter(country => country.name.common === params.name);

  useEffect(() => {
    axios.get(ALL_COUNTRIES_DETAILED_INFO).then(({data}) => (setDetails(data)))
  }, []);

  let info;
  if (filteredCountry.length > 0) {
    info = {
      src: filteredCountry[0].flags.png,
      name: filteredCountry[0].name.common,
      nativeName: filteredCountry[0].name.official,
      population: filteredCountry[0].population,
      region: filteredCountry[0].region,
      subRegion: filteredCountry[0].subregion,
      capital: filteredCountry[0].capital[0],
      domain: filteredCountry[0].tld[0],
      currency: filteredCountry[0].currencies,
      language: filteredCountry[0].languages,
      borders: filteredCountry[0].borders,
    }
  }

  const deepObjParse = (obj) => {
    const objects = Object.values(obj);
    return objects;
  }

  return (
    <>
    <BtnBack />
    <Article>
      {filteredCountry.length > 0 && 
        <Wrapper>
          <WrapperImg>
            <CardImage src={info.src} alt={info.name}/>
          </WrapperImg>
          <Title>{info.name}</Title>
          <Lists>
            <List>
              <ListItem><b>Native name:</b> {info.nativeName}</ListItem>
              <ListItem><b>Population:</b> {info.population}</ListItem>
              <ListItem><b>Region:</b> {info.region}</ListItem>
              <ListItem><b>Sub Region:</b> {info.subRegion}</ListItem>
              <ListItem><b>Capital:</b> {info.capital}</ListItem>
              <ListItem><b>Domain:</b> {info.domain}</ListItem>
            </List>
            <List>
              <ListItem><b>Currencies:</b> 
                {deepObjParse(info.currency).map(currency => (<div key={currency.name}>{currency.name}</div>))}
              </ListItem>
              <ListItem><b>Languages:</b> 
                {deepObjParse(info.language).map(language => (<div key={language}>{language}</div>))}
              </ListItem>
            </List>
            <div><div><b>Borders:</b></div>
            <Borders details={details} params={params} setBorders={setBorders} render={render} setRender={setRender} />
            </div>
          </Lists>
        </Wrapper>
      }
    </Article>
    </>
  )
}
