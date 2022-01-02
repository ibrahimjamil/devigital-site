import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import { Box, Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    outerMostContainer: {
        position: 'relative',
    },
    metaDataContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    tagLine: {
        fontWeight: 'bold',
        color: '#FFFF',
        fontSize: '5vw',
        margin: '20px 0px',
    },
    subHeading: {
        color: '#FFFF',
        textTransform: 'capitalize',
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#FF6974',
        textTransform: 'capitalize',
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        },
    },
    image: {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            height: 500,
        },
        [theme.breakpoints.down('xs')]: {
            height: 400,
        },
    },
    contentContainer: {
        height: '100%',
    },
}));

export default function Slide2() {
    const classes = useStyles();

    return (
        <Box className={classes.outerMostContainer}>
            <Box className={classes.metaDataContainer}>
                <Grid container alignItems="center" className={classes.contentContainer}>
                    <Grid item xs={6}>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={10} sm={8}>
                                <Typography
                                    variant="overline"
                                    display="block"
                                    gutterBottom
                                    className={classes.subHeading}
                                >
                                    We are Devigital
                                </Typography>
                                <Typography variant="h1" className={classes.tagLine}>
                                    Re-design dating app out of the box
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    endIcon={<ArrowRight />}
                                >
                                    Case Study
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box component="img" src="/images/HomeBackground2.jpeg" className={classes.image} />
        </Box>
    );
}
