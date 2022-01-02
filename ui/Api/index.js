import { gql } from '@apollo/client';

export const homeLandingData = gql`
    query {
        allHomePageSections {
            title
            description
            image {
                publicUrl
            }
        }
    }
`;

export const homeClientData = gql`
    query {
        allClients {
            name
            description
        }
    }
`;

export const homePartnersData = gql`
    query {
        allPartners {
            name
            description
        }
    }
`;

export const homeCaseStudyData = gql`
    query {
        allCaseStudies(first: 3) {
            id
            clientName
            title
            description
            image {
                publicUrl
            }
        }
    }
`;

export const homeServicesData = gql`
    query {
        allServices {
            image {
                publicUrl
            }
            title
            description
            icon {
                publicUrl
            }
        }
    }
`;

export const getCaseStudyDetailByCaseStudyId = (id) => gql`
    query {
        allCaseStudyDetails(where:{
            caseStudy:{
              id:"${id}"
            }
          }
          ){
            title
            description
            sectionName
            caseStudyImages{
                image{
                  publicUrl
                }
              }
          }
    }
`;

export const aboutData = gql`
    query {
        allAbouts {
            title
            description
            image {
                publicUrl
            }
        }
    }
`;

export const allCaseStudies = gql`
    query {
        allCaseStudies {
            id
            jobField
            clientName
            title
            description
            image {
                publicUrl
            }
        }
    }
`;
