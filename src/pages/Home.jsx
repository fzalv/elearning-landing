import React, { Fragment } from 'react';
import Company from '../components/Company-section/Company';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <Company />
        </Fragment>
    );
};

export default Home;