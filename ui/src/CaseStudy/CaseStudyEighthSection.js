import React from 'react';
import { Grid } from '@material-ui/core';
import { BASE_URL } from '../../routes';
import { makeStyles } from '@material-ui/core/styles';
import CommonTextComponent from './CommonTextComponent';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(8),
        },
    },
}));

function CaseStudyEighthSection({ caseStudyDetail }) {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.container}>
            <Grid xs={12} sm={8}>
                <img
                    src={`${BASE_URL}${caseStudyDetail?.caseStudyImages[0]?.image?.publicUrl}`}
                    alt="CaseStudyLandingImage"
                    width="100%"
                />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.container}>
                <CommonTextComponent caseStudyDetail={caseStudyDetail} showDescription={true} />
            </Grid>
        </Grid>
    );
}

export default CaseStudyEighthSection;
