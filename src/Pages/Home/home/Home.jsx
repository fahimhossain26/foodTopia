import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Catagory from '../catagory/Catagory';
import PopularMenu from '../populerMenu/PopularMenu';
import Featured from '../../Featured/Featured';
import Testomonial from '../testomonial/Testomonial';
import { Helmet } from 'react-helmet';


const Home = () => {
 
    return (
        <div>
             <Helmet>
                <title>FoodTopia || Home</title>
                {/* <link rel="logo" href="https://i.postimg.cc/dVmDKSgd/Colorful-Illustrative-Restaurant-Master-Chef-Logo-removebg-preview.png" /> */}
            </Helmet>
           <Banner></Banner>
           <Catagory></Catagory>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testomonial></Testomonial>
           
        </div>
    );
};

export default Home;