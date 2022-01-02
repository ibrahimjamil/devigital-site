import React, { createContext } from 'react';
import { allCaseStudies } from '../../Api';
import CaseStudyMain from '../../src/CaseStudyRoot';
import { client } from '../_app';

export const AllCaseStudyProvider = createContext();

export default function about(props) {
    return (
        <React.Fragment>
            <AllCaseStudyProvider.Provider value={props}>
                <CaseStudyMain />
            </AllCaseStudyProvider.Provider>
        </React.Fragment>
    );
}

export const getServerSideProps = async () => {
    const { data: caseStudyDataResponse } = await client.query({
        query: allCaseStudies,
    });
    return {
        props: {
            allCaseStudy: caseStudyDataResponse,
        },
    };
};
