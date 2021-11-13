import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Services></Services>
            <Popular></Popular>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;