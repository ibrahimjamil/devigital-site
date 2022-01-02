import React from 'react';
import { v4 as uuid } from 'uuid';
import { Grid, makeStyles } from '@material-ui/core';
import { BASE_URL } from '../../routes';
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
function CaseStudyThirdSection({ caseStudyDetail }) {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.container}>
            <Grid item xs={12} sm={6}>
                <CommonTextComponent caseStudyDetail={caseStudyDetail} showDescription={true} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2} justifyContent="center">
                    {caseStudyDetail?.caseStudyImages?.map((item) => (
                        <Grid item xs={12} sm={6} key={uuid()}>
                            <img
                                src={`${BASE_URL}${item?.image?.publicUrl}`}
                                alt="CaseStudyLandingImage"
                                width="100%"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CaseStudyThirdSection;
