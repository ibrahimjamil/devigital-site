import React, { createContext } from 'react';
import { client } from './_app';
import HomePage from '../src/HomePage';
import { homeClientData, homeLandingData, homePartnersData, homeCaseStudyData, homeServicesData } from '../Api';

export const HomeProvider = createContext();
export default function Index(props) {
    return (
        <React.Fragment>
            <HomeProvider.Provider value={props}>
                <HomePage />
            </HomeProvider.Provider>
        </React.Fragment>
    );
}

/* we have to call all queries in their own 
pages section and provide that to whole 
inner components as next at build time  */

export const getServerSideProps = async () => {
    const { data: LandingData } = await client.query({
        query: homeLandingData,
    });
    const { data: HomeClientData } = await client.query({
        query: homeClientData,
    });
    const { data: HomePartnersData } = await client.query({
        query: homePartnersData,
    });
    const { data: HomeCaseStudyData } = await client.query({
        query: homeCaseStudyData,
    });
    const { data: HomeServiceData } = await client.query({
        query: homeServicesData,
    });
    return {
        props: {
            homeLandingData: LandingData,
            homeClientData: HomeClientData,
            homePartnerData: HomePartnersData,
            homeCaseStudyData: HomeCaseStudyData,
            homeServiceData: HomeServiceData,
        },
    };
};
