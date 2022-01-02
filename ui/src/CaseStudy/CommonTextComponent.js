import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sectionName: {
        fontFamily: theme.fontFamily,
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        alignItem: 'start',
        color: '#FF6974',
        fontStyle: 'normal',
        textAlign: 'start',
        margin: '0px',
    },

    description: {
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#99A0A4',
        padding: '40px 0px',
    },
    tagLine: {
        fontWeight: '700',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        color: '#303335',
        fontSize: '40px',
        padding: '10px 0px',
        letterSpacing: '-2px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
    },
}));

function CommonTextComponent({ caseStudyDetail, showDescription }) {
    const classes = useStyles();

    return (
        <Box>
            <Typography classes={{ root: classes.sectionName }}>{caseStudyDetail?.sectionName}</Typography>
            <Typography variant="h4" className={classes.tagLine}>
                {caseStudyDetail?.title}
            </Typography>
            {showDescription ? (
                <Typography classes={{ root: classes.description }}>{caseStudyDetail?.description}</Typography>
            ) : null}
        </Box>
    );
}

export default CommonTextComponent;
