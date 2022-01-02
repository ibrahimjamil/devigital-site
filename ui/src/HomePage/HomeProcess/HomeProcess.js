import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import ProcessLogo1 from '../../../public/images/Process1.png';
import ProcessLogo2 from '../../../public/images/Process2.png';
import ProcessLogo3 from '../../../public/images/Process3.png';
import ProcessLogo4 from '../../../public/images/Process4.png';

const useStyles = makeStyles((theme) => ({
    homeProcessRoot: {
        backgroundColor: '#FFFFFF',
        paddingBottom: '100px',
        paddingLeft: '150px',
        paddingRight: '150px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '100px',
            paddingLeft: '75px',
            paddingRight: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '50px',
            paddingLeft: '50px',
            paddingRight: '50px',
        },
    },
    homeProcessTitle: {
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
    homeProcessDescription: {
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
            fontSize: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
        },
    },
    showCaseTitle: {
        fontFamily: theme.fontFamily,
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '32px',
        alignItem: 'center',
        color: '#303335',
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '-0.5px',
        marginBottom: '16px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    showCaseDescription: {
        fontFamily: theme.fontFamily,
        fontWeight: 'normal',
        fontSize: '16px',
        alignSelf: 'stretch',
        alignItem: 'center',
        color: '#99A0A4',
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '-0.5px',
    },
}));

function HomeProcessSection() {
    const classes = useStyles();
    return (
        <Box className={classes.homeProcessRoot}>
            <React.Fragment key={uuid()}>
                <Grid container>
                    <Grid container item xs={12} justifyContent="center">
                        <Typography classes={{ root: classes.homeProcessTitle }}>Process</Typography>
                    </Grid>
                    <Grid container item xs={12} justifyContent="center">
                        <Typography variant="h2" classes={{ root: classes.homeProcessDescription }}>
                            Simplify Software Development Process
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={2} justifyContent="center">
                        <Grid container xs={12} sm={6} lg={3} md={3} item direction="column">
                            <Grid container item justifyContent="center">
                                <Box
                                    sx={{
                                        backgroundColor: '#F4F6F8',
                                        borderRadius: '50%',
                                        height: '60px',
                                        width: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <Image src={ProcessLogo1} alt="Process logo 1" width={'30px'} height={'30px'} />
                                </Box>
                            </Grid>
                            <Typography variant="h3" classes={{ root: classes.showCaseTitle }}>
                                Discovery
                            </Typography>
                            <Typography classes={{ root: classes.showCaseDescription }}>
                                We shape brands through exploration, applying in-depth research to challenge assumptions
                                at every turn.
                            </Typography>
                        </Grid>
                        <Grid container xs={12} sm={6} lg={3} md={3} item direction="column">
                            <Grid container item justifyContent="center">
                                <Box
                                    sx={{
                                        backgroundColor: '#CDECFF',
                                        borderRadius: '50%',
                                        height: '60px',
                                        width: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <Image src={ProcessLogo2} alt="Process logo 2" width={'30px'} height={'30px'} />
                                </Box>
                            </Grid>
                            <Typography variant="h3" classes={{ root: classes.showCaseTitle }}>
                                Design
                            </Typography>
                            <Typography classes={{ root: classes.showCaseDescription }}>
                                Our design approach is to simplify. We embrace the joy in creating something unique that
                                is easy for end users.
                            </Typography>
                        </Grid>
                        <Grid container xs={12} sm={6} lg={3} md={3} item direction="column">
                            <Grid container item justifyContent="center">
                                <Box
                                    sx={{
                                        backgroundColor: '#F2E6FF',
                                        borderRadius: '50%',
                                        height: '60px',
                                        width: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <Image src={ProcessLogo3} alt="Process logo 3" width={'30px'} height={'30px'} />
                                </Box>
                            </Grid>
                            <Typography variant="h3" classes={{ root: classes.showCaseTitle }}>
                                Build
                            </Typography>
                            <Typography classes={{ root: classes.showCaseDescription }}>
                                Using modern technologies, we build with efficiency and skill, creating flexible and
                                scalable business-driven solutions.
                            </Typography>
                        </Grid>
                        <Grid container xs={12} sm={6} lg={3} md={3} item direction="column">
                            <Grid container item justifyContent="center">
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
                                    <Image src={ProcessLogo4} alt="Process logo 4" width={'30px'} height={'30px'} />
                                </Box>
                            </Grid>
                            <Typography variant="h3" classes={{ root: classes.showCaseTitle }}>
                                Launch
                            </Typography>
                            <Typography classes={{ root: classes.showCaseDescription }}>
                                We take an iterative approach to both our work and our practice, always looking for ways
                                to improve what we do.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}
export default HomeProcessSection;
