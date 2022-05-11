import React from 'react';
import Banner from './Banner/Banner';
import Experiment from './Experiment/Experiment';
import Info from './Info/Info';
import Services from './Service/Services';

const Home = () => {
   return (
      <div className="px-12">
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <Experiment></Experiment>
      </div>
   );
};

export default Home;