/* eslint react/forbid-prop-types: 0 */
import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import { BASE_URL } from '../../../routes';
import { HomeProvider } from '../../../pages/index';

const useStyles = makeStyles((theme) => ({
    HomeLandingRoot: {
        backgroundColor: '#FFFFFF',
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: '150px',
        paddingRight: '150px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '100px',
            paddingBottom: '100px',
            paddingLeft: '75px',
            paddingRight: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '50px',
            paddingBottom: '50px',
            paddingLeft: '50px',
            paddingRight: '50px',
        },
    },
    title: {
        fontFamily: 'DM Sans',
        fontWeight: '700',
        fontSize: '48px',
        lineHeight: 'bold',
        alignItem: 'center',
        color: '#303335',
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '-1px',
        padding: '0px 0px 10px 0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
        },
    },
    desc: {
        fontFamily: 'DM Sans',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        alignItem: 'center',
        color: '#99A0A4',
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '-1px',
    },
    homeDesc: {
        padding: '0px 0px 40px 0px',
    },
    homeLandingImage: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
}));

function HomeLandingSection() {
    const { homeLandingData } = useContext(HomeProvider);
    const classes = useStyles();
    return (
        <Box className={classes.HomeLandingRoot}>
            {homeLandingData.allHomePageSections.map((homeLandingSection) => (
                <React.Fragment key={uuid()}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h2" classes={{ root: classes.title }}>
                                {homeLandingSection.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} classes={{ root: classes.homeDesc }}>
                            <Typography classes={{ root: classes.desc }}>{homeLandingSection.description}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    src={`${BASE_URL}${homeLandingSection.image.publicUrl}`}
                                    alt="HomeLandingImage"
                                    classes={{ root: classes.homeLandingImage }}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </React.Fragment>
            ))}
        </Box>
    );
}
export default HomeLandingSection;
