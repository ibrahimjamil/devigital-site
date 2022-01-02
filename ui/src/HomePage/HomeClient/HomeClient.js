import React from 'react';
import { v4 as uuid } from 'uuid';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HomeProvider } from '../../../pages/index';

const useStyles = makeStyles((theme) => ({
    homeClientRoot: {
        backgroundColor: '#FFFFFF',
        paddingBottom: '100px',
        paddingLeft: '150px',
        paddingRight: '150px',
        paddingTop: '100px',
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
    homeClientTitle: {
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
    homeClientDescription: {
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
    showClientName: {
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
    showClientDescription: {
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

function HomeClient() {
    const classes = useStyles();
    const { homeClientData } = React.useContext(HomeProvider);

    return (
        <Box className={classes.homeClientRoot}>
            <Grid container>
                <Grid container item xs={12} justifyContent="center">
                    <Typography classes={{ root: classes.homeClientTitle }}>Client</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <Typography variant="h2" classes={{ root: classes.homeClientDescription }}>
                        From small bussiness to industry leaders
                    </Typography>
                </Grid>
                <Grid item container spacing={2} justifyContent="center">
                    {homeClientData.allClients.map((client) => (
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
                                    <Typography variant="h3" classes={{ root: classes.showClientName }}>
                                        {client.name}
                                    </Typography>
                                    <Typography variant="h1" classes={{ root: classes.showClientDescription }}>
                                        {client.description}
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

export default HomeClient;
