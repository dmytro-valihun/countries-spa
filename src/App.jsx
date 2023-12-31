import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

export default function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}/>}> </Route>
          <Route path='/country/:name' element={<Details countries={countries} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}