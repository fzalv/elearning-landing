import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Company from '../components/Company-section/Company';
import Courses from '../components/Courses-section/Courses';
import Feature from '../components/Feature-section/Feature';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <Company />
            <AboutUs />
            <Courses />
            <ChooseUs />
            <Feature />
        </Fragment>
    );
};

export default Home;