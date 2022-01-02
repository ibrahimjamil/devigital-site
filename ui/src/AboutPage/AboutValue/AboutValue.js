import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '../../components/Carousel/Carousel';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
    aboutValueMissionOuterRoot: {
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
    aboutValueMissionRoot: {
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
    aboutValueMissionTitle: {
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
    aboutValueMissionDescription: {
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
    aboutCoreTitle: {
        fontFamily: theme.fontFamily,
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '32px',
        alignItem: 'center',
        color: '#303335',
        fontStyle: 'normal',
        textAlign: 'start',
        letterSpacing: '-0.5px',
        marginBottom: '16px',
        marginRight: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            textAlign: 'start',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
            textAlign: 'start',
        },
    },
    aboutCoreDescription: {
        fontFamily: theme.fontFamily,
        fontWeight: 'normal',
        fontSize: '16px',
        alignSelf: 'stretch',
        alignItem: 'start',
        color: '#99A0A4',
        fontStyle: 'normal',
        textAlign: 'start',
        letterSpacing: '-0.5px',
        marginRight: '10px',
    },
    cardInner: {
        padding: '40px',
        backgroundColor: '#FFFFFF',
    },
    aboutCoreImage: {
        marginRight: '10px',
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
    },
}));

const AboutValue = () => {
    const classes = useStyles();

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 3,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const missionCarouselData = [
        {
            title: 'We’re all in this together',
            description:
                'We shape brands through exploration, applying in-depth research to challenge assumptions at everyturn.',
            image: '/images/imagesCoreValues1.png',
        },
        {
            title: 'Stay relevant all the time',
            description:
                'We shape brands through exploration, applying in-depth research to challenge assumptions at everyturn.',
            image: '/images/imagesCoreValues2.png',
        },
        {
            title: 'We believe in collaboration',
            description:
                'We shape brands through exploration, applying in-depth research to challenge assumptions at everyturn.',
            image: '/images/imagesCoreValues1.png',
        },
        {
            title: 'We believe in collaboration',
            description:
                'We shape brands through exploration, applying in-depth research to challenge assumptions at everyturn.',
            image: '/images/imagesCoreValues1.png',
        },
    ];
    const sliderItems = missionCarouselData.map((data) => (
        <Grid key={uuid()}>
            <Card classes={{ root: classes.aboutCoreImage }}>
                <CardMedia component="img" src={data.image} alt="HomeServicesImage" />
            </Card>
            <Box
                sx={{
                    backgroundColor: '#FFFF',
                    marginRight: '10px',
                    padding: '40px',
                }}
            >
                <Typography variant="h3" classes={{ root: classes.aboutCoreTitle }}>
                    {data.title}
                </Typography>
                <Typography classes={{ root: classes.aboutCoreDescription }}>{data.description}</Typography>
            </Box>
        </Grid>
    ));

    return (
        <Box className={classes.aboutValueMissionOuterRoot}>
            <Grid container className={classes.aboutValueMissionRoot}>
                <Grid container item xs={12} justifyContent="center">
                    <Typography classes={{ root: classes.aboutValueMissionTitle }}>Core Values</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Typography variant="h2" classes={{ root: classes.aboutValueMissionDescription }}>
                        Our Core Values
                    </Typography>
                </Grid>
            </Grid>
            <Carousel sliderItems={sliderItems} settings={settings} />
        </Box>
    );
};

export default AboutValue;
