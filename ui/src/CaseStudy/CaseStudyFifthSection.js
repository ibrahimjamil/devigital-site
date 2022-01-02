import React from 'react';
import { BASE_URL } from '../../routes';
import { makeStyles, Grid } from '@material-ui/core';

import CommonTextComponent from './CommonTextComponent';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(12),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(5),
        },
    },
}));

function CaseStudyFifthSection({ caseStudyDetail }) {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.container}>
            <Grid item xs={12} sm={6}>
                <CommonTextComponent caseStudyDetail={caseStudyDetail} showDescription={true} />
            </Grid>
            <Grid item xs={12} sm={8}>
                <img
                    src={`${BASE_URL}${caseStudyDetail?.caseStudyImages[0]?.image?.publicUrl}`}
                    alt="CaseStudyLandingImage"
                    width="100%"
                />
            </Grid>
        </Grid>
    );
}

export default CaseStudyFifthSection;
