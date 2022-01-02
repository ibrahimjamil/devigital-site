import React, { useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { Typography, Button, Box, Grid, Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import { BASE_URL } from '../../../routes/index';
import { HomeProvider } from '../../../pages/index';

const useStyles = makeStyles((theme) => ({
    homeCaseStudyRoot: {
        backgroundColor: '#FFFFFF',
        paddingTop: 100,
        paddingLeft: '150px',
        paddingRight: '150px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 100,
            paddingLeft: '75px',
            paddingRight: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: 100,
            paddingLeft: '50px',
            paddingRight: '50px',
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
        padding: '0px 0px 56px 0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
        },
    },
    caseStudyName: {
        fontFamily: theme.fontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        marginBottom: '16px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px',
            fontSize: '13px',
            textAlign: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '8px',
            fontSize: '13px',
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'start',
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '10px',
            textAlign: 'center',
        },
    },
    caseStudyTitle: {
        fontFamily: theme.fontFamily,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '32px',
        letterSpacing: '-0.5px',
        alignSelf: 'stretch',
        marginBottom: '16px',
        marginRight: '80px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginBottom: '8px',
            marginRight: '0px',
            textAlign: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            marginBottom: '7px',
            marginRight: '0px',
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'start',
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '10px',
            textAlign: 'center',
        },
    },
    caseStudyDescription: {
        fontFamily: theme.fontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        alignSelf: 'stretch',
        marginBottom: '55px !important',
        marginRight: '80px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '25px !important',
            fontSize: '14px',
            textAlign: 'center',
            marginRight: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '25px !important',
            fontSize: '14px',
            textAlign: 'center',
            marginRight: '0px',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'start',
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '10px',
            textAlign: 'center',
        },
    },
    eachSection: {
        backgroundColor: '#9659D2',
        marginBottom: '40px',
        borderRadius: '8px',
        color: '#FFFF',
        padding: '65px 64px 64px 64px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '35px 35px 35px 35px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '35px 35px 35px 35px',
        },
    },
    eachSection2: {
        backgroundColor: '#2AA2EC',
        marginBottom: '40px',
        borderRadius: '8px',
        color: '#FFFF',
        padding: '65px 64px 64px 64px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '35px 35px 35px 35px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '35px 35px 35px 35px',
        },
    },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    caseButtonRoot: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '30px',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'start',
            textAlign: 'start',
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '10px',
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
    caseButton: {
        backgroundColor: '#FFFFFF',
        color: '#828282',
        borderRadius: '89px',
        padding: '8px 32px 8px 16px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '32px',
        position: 'relative',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    arrow: {
        position: 'absolute',
        paddingLeft: '5px',
        top: '10%',
        height: '80%',
    },
    caseStudyContent: {
        marginTop: '25px',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        textTransform: 'capitalize',
        fontSize: 16,
        color: '#828282',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        '&:hover': {
            backgroundColor: '#fff',
            color: '#828282',
        },
    },
}));

const HomeCaseStudy = () => {
    const classes = useStyles();
    const { homeCaseStudyData } = useContext(HomeProvider);
    return (
        <Box className={classes.homeCaseStudyRoot}>
            <Grid container>
                <Grid container item xs={12} justifyContent="center">
                    <Typography classes={{ root: classes.homeCaseStudyTitle }}>Portfolio</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Typography variant="h2" classes={{ root: classes.homeCaseStudyDescription }}>
                        Our Latest Works
                    </Typography>
                </Grid>
                <Grid item container>
                    {homeCaseStudyData.allCaseStudies.map((caseStudy, index) => (
                        <React.Fragment key={uuid()}>
                            <Grid
                                classes={{
                                    root: clsx({
                                        [classes.eachSection]: parseInt(index % 2) === 0,
                                        [classes.eachSection2]: parseInt(index % 2) === 1,
                                    }),
                                }}
                                container
                            >
                                <Grid
                                    item
                                    container
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    direction="column"
                                    classes={{
                                        root: classes.caseStudyContent,
                                    }}
                                >
                                    <Typography variant="h5" classes={{ root: classes.caseStudyName }}>
                                        {caseStudy.clientName}
                                    </Typography>
                                    <Typography variant="h4" classes={{ root: classes.caseStudyTitle }}>
                                        {caseStudy.title}
                                    </Typography>
                                    <Typography variant="h5" classes={{ root: classes.caseStudyDescription }}>
                                        {caseStudy.description}
                                    </Typography>
                                    <Box className={classes.caseButtonRoot}>
                                        <Link href={`works/${caseStudy?.id}`} passHref>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                endIcon={<ArrowRight />}
                                            >
                                                Let&apos;s Talk
                                            </Button>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={8}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            src={`${BASE_URL}${caseStudy.image.publicUrl}`}
                                            alt="HomeCaseImage"
                                            classes={{ root: classes.image }}
                                        />
                                    </Card>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeCaseStudy;
