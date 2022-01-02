import React from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';
import { BASE_URL } from '../../routes';

const useStyles = makeStyles((theme) => ({
    caseStudyRoot: {
        backgroundColor: '#FFFFFF',
        paddingTop: '100px',
        paddingBottom: '80px',
        paddingLeft: '150px',
        paddingRight: '150px',
        [theme.breakpoints.down('sm')]: {
            padding: '40px 24px',
        },

        [theme.breakpoints.down('xs')]: {
            padding: '40px 24px',
        },
    },
    sectionName: {
        fontFamily: theme.fontFamily,
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        alignItem: 'start',
        color: '#FF6974',
        fontStyle: 'normal',
        textAlign: 'start',
        margin: '0px',
    },
    tagLine: {
        fontWeight: 'bold',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        color: '#303335',
        fontSize: '80px',
        margin: '40px 0px',
        paddingRight: '200px',
        lineHeight: '72px',
        letterSpacing: '-2px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            marginBottom: '20px',
            paddingRight: '50px',
            fontSize: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
            marginBottom: '20px',
            paddingRight: '50px',
            lineHeight: '50px',
            fontSize: '40px',
        },
    },
}));

function CaseStudyHeroSection({ caseStudyDetail }) {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.caseStudyRoot}>
                <Typography classes={{ root: classes.sectionName }}>{caseStudyDetail?.sectionName}</Typography>
                <Typography variant="h1" className={classes.tagLine}>
                    {caseStudyDetail.title}
                </Typography>
            </Box>
            <img
                src={`${BASE_URL}${caseStudyDetail?.caseStudyImages[0]?.image?.publicUrl}`}
                alt="CaseStudySecondSection"
                width="100%"
            />
        </Box>
    );
}

export default CaseStudyHeroSection;
