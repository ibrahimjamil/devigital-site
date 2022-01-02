import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { technologyData } from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
    technologyRoot: {
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
    technologyTitle: {
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
    technologyDescription: {
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
        paddingBottom: '10px',
    },
}));

function TechnologySection() {
    const classes = useStyles();
    return (
        <Box className={classes.technologyRoot}>
            <React.Fragment key={uuid()}>
                <Grid container>
                    <Grid container item xs={12} justifyContent="center">
                        <Typography classes={{ root: classes.technologyTitle }}>Technology</Typography>
                    </Grid>
                    <Grid container item xs={12} justifyContent="center">
                        <Typography variant="h2" classes={{ root: classes.technologyDescription }}>
                            Technologies we work with
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={2} justifyContent="center">
                        {technologyData.map((technology) => (
                            <Grid container xs={4} sm={4} lg={2} md={2} item direction="column" key={uuid()}>
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
                                        <Image src={technology.image} alt="img" width={'30px'} height={'30px'} />
                                    </Box>
                                </Grid>
                                <Typography classes={{ root: classes.showCaseDescription }}>
                                    {technology.name}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}
export default TechnologySection;
