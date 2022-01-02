import React, { useContext } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeServiceCard from './HomeServiceCard';
import { HomeProvider } from '../../../pages/index';

const useStyles = makeStyles((theme) => ({
    homeCaseStudyRootOuter: {
        backgroundColor: '#F4F6F8',
        paddingBottom: '80px',
        paddingLeft: '120px',
        paddingRight: '0px',
        paddingTop: '80px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '100px',
            paddingLeft: '10px',
            paddingRight: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '50px',
            paddingLeft: '10px',
            paddingRight: '0px',
        },
    },
    homeCaseStudyRoot: {
        backgroundColor: '#F4F6F8',
        paddingBottom: '0px',
        paddingLeft: '0px',
        paddingRight: '120px',
        paddingTop: '0px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
        },
    },
    homeCaseStudyTitle: {
        fontFamily: theme.fontFamily,
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        alignItem: 'center',
        color: '#FF6974',
        fontStyle: 'normal',
        textAlign: 'center',
        margin: '0px',
    },
    homeCaseStudyDescription: {
        fontFamily: theme.fontFamily,
        fontWeight: '700',
        fontSize: '48px',
        lineHeight: '56px',
        alignItem: 'center',
        color: '#303335',
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '-1px',
        padding: '0px 0px 48px 0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
        },
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        overflowY: 'hidden',
        [theme.breakpoints.down('xs')]: {
            height: 200,
        },
    },
}));

const HomeCaseStudy = () => {
    const classes = useStyles();
    const { homeServiceData } = useContext(HomeProvider);

    return (
        <Box className={classes.homeCaseStudyRootOuter}>
            <Grid container className={classes.homeCaseStudyRoot}>
                <Grid container item xs={12} justifyContent="center">
                    <Typography classes={{ root: classes.homeCaseStudyTitle }}>Services</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Typography variant="h2" classes={{ root: classes.homeCaseStudyDescription }}>
                        Our Core Services
                    </Typography>
                </Grid>
            </Grid>
            <HomeServiceCard homeServiceData={homeServiceData} />
        </Box>
    );
};

export default HomeCaseStudy;
