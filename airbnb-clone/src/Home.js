import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
        <Banner />
        <div className='home__section'>
            <Card 
                src="/img/asset1.jpg" alt=""
                title="Online Booking"
                description="Best online booking epxieirence. Pick date of your holidays"
            />
            <Card 
                src="/img/asset2.jpg" alt=""
                title="Luxury Hotels"
                description="Best online booking epxieirence. Pick date of your holidays"
            />
            <Card 
            src="/img/asset3.jpg" alt=""
            title="Entire Homes"
            description="Best online booking epxieirence. Pick date of your holidays"
            />
        </div>
        <div className='home__section'>
           <Card 
            src="/img/asset4.jpg" alt=""
            title="Entire Homes"
            description="Best online booking epxieirence. Pick date of your holidays"
            price="€550/night"
          /> 
          <Card 
            src="/img/asset5.jpg" alt=""
            title="Entire Homes"
            description="Best online booking epxieirence. Pick date of your holidays"
            price="€420/night"
          /> 
          <Card 
            src="/img/asset6.jpg" alt=""
            title="Entire Homes"
            description="Best online booking epxieirence. Pick date of your holidays"
            price="€320/night"
          />
        </div>
    </div>
  )
}

export default Home;
