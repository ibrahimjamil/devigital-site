import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    baseRoot: {
        backgroundColor: '#303335',
        padding: '50px',
        [theme.breakpoints.between('md', 'lg')]: {
            paddingTop: '100px',
            paddingBottom: '120px',
            paddingLeft: '180px',
            paddingRight: '180px',
        },
    },
    contentRoot: {
        color: '#99A0A4',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    linksSpacing: {
        marginBottom: '12px',
    },
}));

const Footer = (props) => {
    const classes = useStyles();
    return (
        <div>
            {props.children}
            <Grid classes={{ root: classes.baseRoot }}>
                <Grid container spacing={4}>
                    <Grid
                        item
                        container
                        direction="column"
                        classes={{ root: classes.contentRoot }}
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                    >
                        <Typography sx={{ marginBottom: '24px' }}>
                            North America / Americas 379 W Broadway New York, NY 10012 hello@devigital.com +1 415 796
                            0359
                        </Typography>
                        <Typography textAlign="center">© 2021 Devigital Systems</Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        classes={{ root: classes.contentRoot }}
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                    >
                        <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                            <Link href="/Home">
                                <Typography classes={{ root: classes.linksSpacing }}>Home</Typography>
                            </Link>
                            <Link href="/Works">
                                <Typography classes={{ root: classes.linksSpacing }}>Works</Typography>
                            </Link>
                            <Link href="/Services">
                                <Typography classes={{ root: classes.linksSpacing }}>Services</Typography>
                            </Link>
                            <Link href="/About">
                                <Typography classes={{ root: classes.linksSpacing }}>About</Typography>
                            </Link>
                            <Link href="/Contacts">
                                <Typography>Contacts</Typography>
                            </Link>
                        </Grid>
                        <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                            <Link href="/Careers">
                                <Typography classes={{ root: classes.linksSpacing }}>Careers</Typography>
                            </Link>
                            <Link href="/Journals">
                                <Typography classes={{ root: classes.linksSpacing }}>Journals</Typography>
                            </Link>
                            <Link href="/Clients">
                                <Typography classes={{ root: classes.linksSpacing }}>Clients</Typography>
                            </Link>
                            <Link href="/Partner">
                                <Typography classes={{ root: classes.linksSpacing }}>Partner</Typography>
                            </Link>
                            <Link href="/Tech">
                                <Typography>Tech</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        classes={{ root: classes.contentRoot }}
                        xs={12}
                        sm={4}
                        md={4}
                        lg={4}
                        sx={{ textAlign: 'left' }}
                    >
                        <Link href="/Facebook">
                            <Typography classes={{ root: classes.linksSpacing }}>Facebook</Typography>
                        </Link>
                        <Link href="/Instagram">
                            <Typography classes={{ root: classes.linksSpacing }}>Instagram</Typography>
                        </Link>
                        <Link href="/Twitter">
                            <Typography classes={{ root: classes.linksSpacing }}>Twitter</Typography>
                        </Link>
                        <Link href="/Dribble">
                            <Typography classes={{ root: classes.linksSpacing }}>Dribble</Typography>
                        </Link>
                        <Link href="/Behance">
                            <Typography>Behance</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
