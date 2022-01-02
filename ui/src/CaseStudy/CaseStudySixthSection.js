import React from 'react';
import { BASE_URL } from '../../routes';
import { makeStyles } from '@material-ui/core/styles';
import CommonTextComponent from './CommonTextComponent';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(8),
        },
    },
}));

function CaseStudySixthSection({ caseStudyDetail }) {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={6} className={classes.container}>
            <Grid item xs={12} sm={4}>
                <CommonTextComponent caseStudyDetail={caseStudyDetail} showDescription={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img
                    src={`${BASE_URL}${caseStudyDetail?.caseStudyImages[0]?.image?.publicUrl}`}
                    alt="CaseStudyLandingImage"
                    width="100%"
                />
            </Grid>
        </Grid>
    );
}

export default CaseStudySixthSection;
