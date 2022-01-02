import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AboutProvider } from '../../../pages/about';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { BASE_URL } from '../../../routes';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
    aboutRoot: {
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
    aboutImage: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    about: {
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
            fontSize: '60px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
            marginBottom: '20px',
            paddingRight: '50px',
            lineHeight: '50px',
            fontSize: '50px',
        },
    },
    aboutDescription: {
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#99A0A4',
        marginTop: '80px',
        marginBottom: '80px',
        marginRight: '250px',
        marginLeft: '250px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
            marginBottom: '80px',
            marginRight: '150px',
            marginLeft: '150px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
            marginBottom: '50px',
            marginRight: '70px',
            marginLeft: '70px',
        },
    },
}));

function AboutLanding() {
    const classes = useStyles();
    const { aboutData } = useContext(AboutProvider);
    return (
        <Box>
            {aboutData.allAbouts.map((about) => (
                <React.Fragment key={uuid()}>
                    <Box className={classes.aboutRoot}>
                        <Typography classes={{ root: classes.about }}>About</Typography>
                        <Typography variant="h1" className={classes.tagLine}>
                            {about.title}
                        </Typography>
                    </Box>
                    <Card>
                        <CardMedia
                            component="img"
                            src={`${BASE_URL}${about.image.publicUrl}`}
                            alt="AboutLandingImage"
                            classes={{ root: classes.aboutImage }}
                        />
                    </Card>
                    <Typography classes={{ root: classes.aboutDescription }}>{about.description}</Typography>
                </React.Fragment>
            ))}
        </Box>
    );
}

export default AboutLanding;
