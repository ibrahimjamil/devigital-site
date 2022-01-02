import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Grid, Typography, TextField, Button, Box } from '@material-ui/core';
import HomePageContactSectionImage from '../../public/images/HomePageContactSection.png';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: '200px',
        paddingRight: '200px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
            paddingBottom: '50px',
            paddingLeft: '80px',
            paddingRight: '80px',
        },
    },
    contactTitle: {
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: '#FF6974',
        marginBottom: '64px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '34px',
        },
    },
    contactDescription: {
        fontFamily: 'DM Sans',
        fontSize: '80px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '72px',
        letterSpacing: '-2px',
        textAlign: 'left',
        marginBottom: '34px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
            lineHeight: '30px',
        },
    },
    nameEmailInput: {
        marginBottom: '30px',
        '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '15px',
        },
    },
    messageInput: {
        marginBottom: '30px',
        '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
        },
    },
    submitButton: {
        border: '2px solid #FFFFFF',
        color: '#FFFF',
        backgroundColor: '',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '80px',
        backgroundColor: '#FF6974',
        textTransform: 'capitalize',
        fontSize: 16,
        color: '#FFFF',
        marginTop: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        '&:hover': {
            backgroundColor: '#FFFF',
            color: '#FF6974',
        },
    },
    attachmentButton: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '80px',
        backgroundColor: '#FF6974',
        textTransform: 'capitalize',
        fontSize: 16,
        color: '#FFFF',
        marginBottom: '30px',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        '&:hover': {
            backgroundColor: '#FFFF',
            color: '#FF6974',
        },
    },
    contactSectionImage: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
        marginBottom: '100px',
    },
}));

function index() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Grid container classes={{ root: classes.root }}>
                <Grid container direction="column">
                    <Typography variant="p" classes={{ root: classes.contactTitle }}>
                        inquiry
                    </Typography>
                    <Typography classes={{ root: classes.contactDescription }}>
                        Hello. We’ve been expecting you.
                    </Typography>
                </Grid>
                <form ref={form} onSubmit={onSubmit} style={{ width: '100%', marginTop: '60px' }}>
                    <Grid container direction="column">
                        <Grid item container direction="column">
                            <Typography
                                style={{
                                    paddingBottom: '5px',
                                    fontSize: '16px',
                                    fontFamily: 'DM Sans',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    lineHeight: '24px',
                                }}
                            >
                                Name
                            </Typography>
                            <TextField
                                label={'Enter your Full Name'}
                                variant="outlined"
                                type="text"
                                value={name}
                                onChange={handleChangeName}
                                classes={{ root: classes.nameEmailInput }}
                            />
                        </Grid>
                        <Grid item container direction="column">
                            <Typography
                                style={{
                                    paddingBottom: '5px',
                                    paddingTop: '10px',
                                    fontSize: '16px',
                                    fontFamily: 'DM Sans',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    lineHeight: '24px',
                                }}
                            >
                                Email address
                            </Typography>
                            <TextField
                                label={'Enter your Email Address'}
                                variant="outlined"
                                type="text"
                                value={email}
                                onChange={handleChangeEmail}
                                classes={{ root: classes.nameEmailInput }}
                            />
                        </Grid>
                        <Grid item container direction="column">
                            <Typography
                                style={{
                                    paddingBottom: '5px',
                                    paddingTop: '10px',
                                    fontSize: '16px',
                                    fontFamily: 'DM Sans',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    lineHeight: '24px',
                                }}
                            >
                                Message
                            </Typography>
                            <TextField
                                variant="outlined"
                                label={'Tell us about your project'}
                                type="text"
                                value={message}
                                multiline
                                rows={7}
                                onChange={handleChangeMessage}
                                classes={{ root: classes.messageInput }}
                            />
                        </Grid>
                        <Grid container direction="row">
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.attachmentButton}
                                startIcon={<AttachFileIcon />}
                                onClick={() => {}}
                            >
                                add attachment
                            </Button>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        endIcon={<ArrowRight />}
                    >
                        SEND
                    </Button>
                </form>
            </Grid>
            <Box className={classes.contactSectionImage}>
                <Image src={HomePageContactSectionImage} alt="Contact Us" tooltip="Contact Us" />
            </Box>
        </>
    );
}

export default index;
