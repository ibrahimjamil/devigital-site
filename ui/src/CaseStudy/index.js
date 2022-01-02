import React, { useContext } from 'react';
import CaseStudyHeroSection from './CaseStudyHeroSection';
import CaseStudyThirdSection from './CaseStudyThirdSection';
import CaseStudySecondSection from './CaseStudySecondSection';
import CaseStudyFourthSection from './CaseStudyFourthSection';
import CaseStudyFifthSection from './CaseStudyFifthSection';
import CaseStudySixthSection from './CaseStudySixthSection';
import CaseStudySeventhSection from './CaseStudySeventhSection';
import CaseStudyEighthSection from './CaseStudyEighthSection';
import { CaseStudyProvider } from '../../pages/works/[works]';

function Index() {
    const { caseStudyDetails } = useContext(CaseStudyProvider);
    const { allCaseStudyDetails } = caseStudyDetails;

    const heroSection = allCaseStudyDetails[0];
    const secondSection = allCaseStudyDetails[1];
    const thirdSection = allCaseStudyDetails[2];
    const fourthSection = allCaseStudyDetails[3];
    const fifthSection = allCaseStudyDetails[4];
    const sixthSection = allCaseStudyDetails[5];
    const seventhSection = allCaseStudyDetails[5];
    const eighthSection = allCaseStudyDetails[6];

    return (
        <>
            {heroSection ? <CaseStudyHeroSection caseStudyDetail={heroSection} /> : null}
            {secondSection ? <CaseStudySecondSection caseStudyDetail={secondSection} /> : null}
            {thirdSection ? <CaseStudyThirdSection caseStudyDetail={thirdSection} /> : null}
            {fourthSection ? <CaseStudyFourthSection caseStudyDetail={fourthSection} /> : null}
            {fifthSection ? <CaseStudyFifthSection caseStudyDetail={fifthSection} /> : null}
            {sixthSection ? <CaseStudySixthSection caseStudyDetail={sixthSection} /> : null}
            {seventhSection ? <CaseStudySeventhSection caseStudyDetail={seventhSection} /> : null}
            {eighthSection ? <CaseStudyEighthSection caseStudyDetail={eighthSection} /> : null}
        </>
    );
}

export default Index;
