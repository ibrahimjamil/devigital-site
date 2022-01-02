import React from 'react';
import HomeCaseStudy from './HomeCaseStudy/HomeCaseStudy';
import HomeClient from './HomeClient/HomeClient';
import HomeLanding from './HomeLanding/HomeLanding';
import HomePartner from './HomePartner/HomePartner';
import HomeProcess from './HomeProcess/HomeProcess';
import HomeCarousel from './HomepageCarousel/index';
import HomeService from './HomeServices/HomeService';
import ContactSection from './ContactSection/ContactSection';
function index() {
    return (
        <>
            <HomeCarousel />
            <HomeLanding />
            <HomeProcess />
            <HomeService />
            <HomeCaseStudy />
            <HomeClient />
            <HomePartner />
            <ContactSection />
        </>
    );
}

export default index;
