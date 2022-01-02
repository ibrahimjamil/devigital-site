import React from 'react';
import { v4 as uuid } from 'uuid';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AboutProvider } from '../../../pages/about';

const useStyles = makeStyles((theme) => ({
    homePartnerRoot: {
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
    homePartnerTitle: {
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
    homePartnerDescription: {
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
            fontSize: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
        },
    },
    showPartnerName: {
        fontFamily: theme.fontFamily,
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '32px',
        color: '#303335',
        fontStyle: 'normal',
        letterSpacing: '-0.5px',
        marginBottom: '8px',
        height: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    showPartnerDescription: {
        fontFamily: theme.fontFamily,
        fontWeight: 'normal',
        fontSize: '16px',
        alignSelf: 'stretch',
        color: '#99A0A4',
        fontStyle: 'normal',
        letterSpacing: '-0.5px',
        height: '55px',
        overflow: 'auto',
    },
}));

function AboutPartner() {
    const classes = useStyles();
    const { aboutPartnerData } = React.useContext(AboutProvider);

    return (
        <Box className={classes.homePartnerRoot}>
            <Grid container>
                <Grid container item xs={12} justifyContent="center">
                    <Typography classes={{ root: classes.homePartnerTitle }}>Partners</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Typography variant="h2" classes={{ root: classes.homePartnerDescription }}>
                        Fine quality of work comes from strong and lasting partnerships
                    </Typography>
                </Grid>
                <Grid item container spacing={2} justifyContent="center">
                    {aboutPartnerData.allPartners.map((partner) => (
                        <React.Fragment key={uuid()}>
                            <Grid container xs={12} sm={6} lg={3} md={3} item justifyContent="center">
                                <Box
                                    sx={{
                                        border: '1px solid #C5CBCF',
                                        boxSizing: 'border-box',
                                        borderRadius: '16px',
                                        width: '270px',
                                        height: '248px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-start',
                                        padding: '120px 24px 24px ',
                                    }}
                                >
                                    <Typography variant="h3" classes={{ root: classes.showPartnerName }}>
                                        {partner.name}
                                    </Typography>
                                    <Typography variant="h1" classes={{ root: classes.showPartnerDescription }}>
                                        {partner.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutPartner;
