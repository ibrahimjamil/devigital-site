import React, { createContext } from 'react';
import { client } from './_app';
import { aboutData, homeClientData as aboutClientData, homePartnersData as aboutPartnersData } from '../Api';
import AboutPage from '../src/AboutPage';

export const AboutProvider = createContext();
export default function about(props) {
    return (
        <React.Fragment>
            <AboutProvider.Provider value={props}>
                <AboutPage />
            </AboutProvider.Provider>
        </React.Fragment>
    );
}

export const getServerSideProps = async () => {
    const { data: AboutData } = await client.query({
        query: aboutData,
    });
    const { data: AboutClientData } = await client.query({
        query: aboutClientData,
    });
    const { data: AboutPartnersData } = await client.query({
        query: aboutPartnersData,
    });
    return {
        props: {
            aboutData: AboutData,
            aboutClientData: AboutClientData,
            aboutPartnerData: AboutPartnersData,
        },
    };
};
