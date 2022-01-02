import React, { createContext } from 'react';
import ContactPage from '../src/ContactPage';

export const ContactProvider = createContext();

export default function Index(props) {
    return (
        <React.Fragment>
            <ContactProvider.Provider value={props}>
                <ContactPage />
            </ContactProvider.Provider>
        </React.Fragment>
    );
}

/* we have to call all queries in their own 
pages section and provide that to whole 
inner components as next at build time  */

export const getServerSideProps = async () => {
    return {
        props: {},
    };
};
