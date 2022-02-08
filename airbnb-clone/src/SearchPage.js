import { Button } from '@mui/material';
import React from 'react';
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>63 stays • 2 guest </p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">Cancelarion Flexibility</Button>
            <Button variant="outlined">Type of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More filters</Button>
        </div>

        <SearchResult
            img="/img/asset4.jpg"
            location="Private room. Centre of London "
            title="Stay at this awesome flat"
            description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • WiFi • Kitchen • Free Parging "
            star={4.73}
            price="€ 404 / night"
            total="€ 1212 total"
        />
        <SearchResult
            img="/img/asset5.jpg"
            location="Private room. Centre of London "
            title="Stay at this awesome flat"
            description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • WiFi • Kitchen • Free Parging "
            star={4.73}
            price="€ 404 / night"
            total="€ 1212 total"
        />
        <SearchResult
            img="/img/asset6.jpg"
            location="Private room. Centre of London "
            title="Stay at this awesome flat"
            description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • WiFi • Kitchen • Free Parging "
            star={4.73}
            price="€ 404 / night"
            total="€ 1212 total"
        />

    </div>
  );
}

export default SearchPage;
