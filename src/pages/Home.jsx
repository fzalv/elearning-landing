import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import Company from '../components/Company-section/Company';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <Company />
            <AboutUs />
        </Fragment>
    );
};

export default Home;