import React from 'react';
import AboutLanding from './AboutLanding/AboutLanding';
import AboutProcess from '../HomePage/HomeProcess/HomeProcess';
import AboutValue from '../AboutPage/AboutValue/AboutValue';
import AboutMission from '../AboutPage/AboutMission/AboutMission';
import AboutClient from '../AboutPage/AboutClient/AboutClient';
import AboutPartner from './AboutPartner/AboutPartner';
import ContactSection from '../HomePage/ContactSection/ContactSection';
import TechnologySection from '../components/Technology/Technology';

function Index() {
    return (
        <>
            <AboutLanding />
            <AboutProcess />
            <AboutValue />
            <AboutMission />
            <AboutClient />
            <AboutPartner />
            <TechnologySection />
            <ContactSection />
        </>
    );
}

export default Index;
