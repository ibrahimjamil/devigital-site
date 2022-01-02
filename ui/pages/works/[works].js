import React, { createContext } from 'react';
import { client } from '../_app';
import CaseStudy from '../../src/CaseStudy/index';
import { getCaseStudyDetailByCaseStudyId } from '../../Api';

export const CaseStudyProvider = createContext();

export default function about(props) {
    return (
        <React.Fragment>
            <CaseStudyProvider.Provider value={props}>
                <CaseStudy />
            </CaseStudyProvider.Provider>
        </React.Fragment>
    );
}

export const getServerSideProps = async (context) => {
    const { params } = context;
    const caseStudyId = params?.works?.toString();
    const { data: caseStudyDataResponse } = await client.query({
        query: getCaseStudyDetailByCaseStudyId(caseStudyId),
    });

    return {
        props: {
            caseStudyDetails: caseStudyDataResponse,
        },
    };
};
