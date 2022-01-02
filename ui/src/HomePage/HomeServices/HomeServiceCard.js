import React from 'react';
import { v4 as uuid } from 'uuid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import { BASE_URL } from '../../../routes';
import Carousel from '../../components/Carousel/Carousel';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
    },
    showCaseTitle: {
        fontFamily: theme.fontFamily,
        fontWeight: 'bold',
        fontSize: '30px',
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
    showCaseDescription: {
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
    homeLandingImage: {
        marginRight: '10px',
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
    },
}));

function HomeServiceCard({ homeServiceData }) {
    const classes = useStyles();
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
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
    const sliderItems = homeServiceData.allServices.map((services) => (
        <Grid key={uuid()}>
            <Card classes={{ root: classes.homeLandingImage }}>
                <CardMedia component="img" src={`${BASE_URL}${services.image.publicUrl}`} alt="HomeServicesImage" />
            </Card>
            <Box
                sx={{
                    backgroundColor: '#FFFF',
                    marginRight: '10px',
                    padding: '40px',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#FFD4D7',
                        borderRadius: '50%',
                        height: '60px',
                        width: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                    }}
                >
                    <img
                        src={`${BASE_URL}${services.icon.publicUrl}`}
                        alt="Process logo 4"
                        style={{ height: '30px', width: '30px' }}
                    />
                </Box>
                <Typography variant="h3" classes={{ root: classes.showCaseTitle }}>
                    {services.title}
                </Typography>
                <Typography classes={{ root: classes.showCaseDescription }}>{services.description}</Typography>
            </Box>
        </Grid>
    ));

    return <Carousel sliderItems={sliderItems} settings={settings} />;
}

export default HomeServiceCard;
