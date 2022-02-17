import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Company from '../components/Company-section/Company';
import Courses from '../components/Courses-section/Courses';
import Feature from '../components/Feature-section/Feature';
import Footer from '../components/Footer-section/Footer';
import FreeCourse from '../components/Free-course-section/FreeCourse';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import Newsletter from '../components/Newsletter-section/Newsletter';
import Testimonials from '../components/Testimonials/Testimonials';

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
            <FreeCourse />
            <Testimonials />
            <Newsletter />
            <Footer />
        </Fragment>
    );
};

export default Home;