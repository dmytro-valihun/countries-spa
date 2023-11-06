import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_COUNTRIES } from '../links';
import Controls from '../components/Controls';
import ListOfCountries from '../components/ListOfCountries';
import Country from '../components/Country';


export default function HomePage({countries, setCountries}) {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const navigate = useNavigate();

    const handleSearch = (search, region) => {
        let arr = [...countries];
        if (region) {
            arr = arr.filter(country => country.region.includes(region))
        }
        if (search) {
            arr = arr.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(arr)
    }

    useEffect(() => {
        if (!countries.length) 
        // eslint-disable-next-line
        axios.get(ALL_COUNTRIES).then(({data}) => (setCountries(data), setFilteredCountries(data)));
        // eslint-disable-next-line 
    }, []);

  return (
    <>
        <Controls onSearch={handleSearch}/>
            <ListOfCountries>
                {filteredCountries.map(country => {
                    const countryInfo = {
                    img: country.flags.png,
                    name: country.name.common,
                    info: [
                        {
                        title: 'Population',
                        description: country.population + ' people',
                        },
                        {
                        title: 'Region',
                        description: country.region,
                        },
                        {
                        title: 'Capital',
                        description: country.capital,
                        }
                    ]
                }
                return <Country key={country.name.common} onClick={() => navigate(`/country/${country.name.common}`)} {...countryInfo}/>
            })}
        </ListOfCountries>
    </>
  )
}
