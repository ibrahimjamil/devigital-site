import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import HomePageContactSectionImage from '../../../public/images/HomePageContactSection.png';

const useStyles = makeStyles((theme) => ({
    contactSectionRoot: {
        padding: '50px',
        backgroundColor: '#FF6974',
    },
    contactSectionImage: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'DM Sans',
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontStyle: '48px',
        textAlign: 'center',
        letterSpacing: '-1px',
        padding: '0px 0px 10px 0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
        },
    },
    contactLabelStyle: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'DM Sans',
        fontWeight: 'normal',
        color: '#FFFFFF',
        fontSize: '16px',
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '-1px',
        padding: '0px 0px 10px 0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
        },
    },
    contactUsBtnContainer: {
        display: 'flex',
        justifyContent: 'center',
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
function ContactSection() {
    const classes = useStyles();
    return (
        <Box className={classes.contactSectionRoot}>
            <Box className={classes.contactSectionImage}>
                <Image src={HomePageContactSectionImage} alt="Contact Us" tooltip="Contact Us" />
            </Box>
            <Typography classes={{ root: classes.contactLabelStyle }}>Contact</Typography>
            <Typography variant="h2" classes={{ root: classes.title }}>
                Interested to collaborate with us?
            </Typography>
            <Typography variant="h2" classes={{ root: classes.title }}>
                Let’s talk about your product
            </Typography>
            <Box className={classes.contactUsBtnContainer}>
                <Button variant="contained" color="secondary" className={classes.button} endIcon={<ArrowRight />}>
                    Let&apos;s Talk
                </Button>
            </Box>
        </Box>
    );
}

export default ContactSection;
