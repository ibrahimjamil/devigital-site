import React, { useContext, useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import { Typography, Grid, Button, Box, CardMedia, Card } from '@material-ui/core';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { BASE_URL } from '../../routes/index';
import { AllCaseStudyProvider } from '../../pages/works';
import Carousel from '../components/Carousel/Carousel';
import ContactSection from '../HomePage/ContactSection/ContactSection';

const useStyles = makeStyles((theme) => ({
    caseStudyRoot: {
        backgroundColor: '#FFFFFF',
        paddingTop: '100px',
        paddingBottom: '80px',
        paddingLeft: '150px',
        paddingRight: '150px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
            paddingBottom: '50px',
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
    caseStudyRootTitle: {
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
    CaseStudyRootDescription: {
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
            fontSize: '40px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
            marginBottom: '20px',
            paddingRight: '50px',
            lineHeight: '50px',
            fontSize: '30px',
        },
    },
    eachSection: {
        backgroundColor: '#9659D2',
        marginBottom: '40px',
        marginRight: '10px',
        borderRadius: '8px',
        color: '#FFFF',
        padding: '65px 64px 64px 64px',
        textAlign: 'center',
        width: 'auto',
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
        marginRight: '10px',
        padding: '65px 64px 64px 64px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '35px 35px 35px 35px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '35px 35px 35px 35px',
        },
    },
    caseStudyContent: {
        marginTop: '25px',
    },
    CaseStudyRootName: {
        fontFamily: theme.fontFamily,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        marginBottom: '16px',
        textAlign: 'start',
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
            textAlign: 'start',
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
        textAlign: 'start',
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
            textAlign: 'start',
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
        textAlign: 'start',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '25px !important',
            fontSize: '14px',
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
            textAlign: 'start',
        },
    },
    caseButtonRoot: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '30px',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'start',
            textAlign: 'start',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '10px',
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'start',
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        textTransform: 'capitalize',
        fontSize: 16,
        color: '#828282',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            justifyContent: 'center',
        },
        '&:hover': {
            backgroundColor: '#fff',
            color: '#828282',
        },
    },
    homeLandingImage: {
        marginRight: '10px',
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
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
    homeCaseStudyRoot: {
        backgroundColor: '#FFFF',
        paddingBottom: '40px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '50px',
            paddingLeft: '10px',
            paddingRight: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '50px',
            paddingLeft: '10px',
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
    homeCaseStudyRootOuter: {
        backgroundColor: '#FFFF',
        paddingBottom: '40px',
        paddingLeft: '120px',
        paddingRight: '120px',
        paddingTop: '40px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '100px',
            paddingLeft: '15px',
            paddingRight: '10px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '50px',
            paddingLeft: '15px',
            paddingRight: '10px',
        },
    },
    jobField: {
        color: '#FF6974',
        paddingBottom: '5px',
    },
}));

function CaseStudyRoot() {
    const classes = useStyles();
    const [showLandingCaseStudy, setLandingShowingCaseStudy] = useState([]);
    const [showCaseData, setShowCaseData] = useState([]);
    const [prevv, setPrev] = useState(false);
    const [nextt, setNext] = useState(false);
    const { allCaseStudy } = useContext(AllCaseStudyProvider);

    useEffect(() => {
        setLandingShowingCaseStudy(allCaseStudy.allCaseStudies.filter((item) => !item.jobField));
    }, [allCaseStudy]);

    useEffect(() => {
        setShowCaseData(allCaseStudy.allCaseStudies.filter((item) => item.jobField));
    }, [allCaseStudy]);

    const settings = {
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        arrows: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        infinite: true,
        padding: '10px',
        dots: true,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };

    const previous = () => {
        setPrev(!prevv);
    };

    const next = () => {
        setNext(!nextt);
    };

    const landingData = showLandingCaseStudy.map((caseStudy, index) => (
        <Grid
            classes={{
                root: clsx({
                    [classes.eachSection]: parseInt(index % 2) === 0,
                    [classes.eachSection2]: parseInt(index % 2) === 1,
                }),
            }}
            container
            key={uuid()}
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
                <Typography variant="h5" classes={{ root: classes.CaseStudyRootName }}>
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
            <Grid item container xs={12} sm={12} md={6} lg={8} justifyContent="center" alignItems="center">
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
    ));
    return (
        <Box>
            <Box className={classes.caseStudyRoot}>
                <Typography classes={{ root: classes.caseStudyRootTitle }}>Works</Typography>
                <Typography variant="h1" className={classes.CaseStudyRootDescription}>
                    Elevate digital experience to the next level
                </Typography>
            </Box>
            <Box
                sx={{
                    marginBottom: '40px',
                }}
            >
                <Carousel next={nextt} prev={prevv} sliderItems={landingData} settings={settings} />
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button onClick={() => previous()}>
                        <ArrowCircleLeftOutlinedIcon sx={{ color: '#99A0A4' }} />
                    </Button>
                    <Button onClick={() => next()}>
                        <ArrowCircleRightOutlinedIcon sx={{ color: '#99A0A4' }} />
                    </Button>
                </Box>
            </Box>
            <Box className={classes.homeCaseStudyRootOuter}>
                <Grid container className={classes.homeCaseStudyRoot}>
                    <Grid container item xs={12} justifyContent="center">
                        <Typography classes={{ root: classes.homeCaseStudyTitle }}>More works</Typography>
                    </Grid>
                    <Grid container item xs={12} justifyContent="center">
                        <Typography variant="h2" classes={{ root: classes.homeCaseStudyDescription }}>
                            From small bussiness to industry leaders
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    {showCaseData.map((caseData) => (
                        <Grid key={uuid()} item md={6} sm={6} xs={12} lg={6}>
                            <Card classes={{ root: classes.homeLandingImage }}>
                                <CardMedia
                                    component="img"
                                    src={`${BASE_URL}${caseData.image.publicUrl}`}
                                    alt="HomeServicesImage"
                                />
                            </Card>
                            <Box
                                sx={{
                                    backgroundColor: '#FFFF',
                                    marginRight: '10px',
                                    padding: '40px',
                                    paddingLeft: '0px',
                                }}
                            >
                                <Typography classes={{ root: classes.jobField }}>{caseData.jobField}</Typography>
                                <Typography variant="h3" classes={{ root: classes.showCaseTitle }}>
                                    {caseData.clientName}
                                </Typography>
                                <Typography classes={{ root: classes.showCaseDescription }}>
                                    {caseData.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <ContactSection />
            </Box>
        </Box>
    );
}

export default CaseStudyRoot;
