import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Experiment from './Experiment/Experiment';
import Info from './Info/Info';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Services from './Service/Services';
import Testimunial from './Testimunial/Testimunial';

const Home = () => {
   return (
      <div className="px-12">
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <Experiment></Experiment>
         <MakeAppoinment></MakeAppoinment>
         <Testimunial></Testimunial>
         <Contact></Contact>
      </div>
   );
};

export default Home;