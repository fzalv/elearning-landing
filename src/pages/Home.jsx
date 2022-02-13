import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import Company from '../components/Company-section/Company';
import Courses from '../components/Courses-section/Courses';
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
        </Fragment>
    );
};

export default Home;