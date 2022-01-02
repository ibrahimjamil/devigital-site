import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import { Box, Typography, Button, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    outerMostContainer: {
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: 400,
        },
    },
    tagLine: {
        fontWeight: 'bold',
        fontSize: '4.5vw',
        margin: '20px 0px',
    },
    subHeading: {
        color: '#FF6974',
        textTransform: 'capitalize',
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#FF6974',
        textTransform: 'capitalize',
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        },
        '&:hover': {
            backgroundColor: '#3c52b2',
            color: '#ffff',
        },
    },
    foregroundImage: {
        width: '100%',
        height: 500,
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 400,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 300,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: 200,
        },
    },
    contentPanel: {
        padding: 40,
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
    },
}));

export default function Slide2() {
    const classes = useStyles();

    return (
        <Box className={classes.outerMostContainer}>
            <Box>
                <Container>
                    <Grid container>
                        <Grid item xs={6} md={6}>
                            <Box className={classes.contentPanel}>
                                <Typography
                                    variant="overline"
                                    display="block"
                                    gutterBottom
                                    className={classes.subHeading}
                                >
                                    We are Devigital
                                </Typography>
                                <Typography variant="h1" className={classes.tagLine}>
                                    Design+build digital products & online experience
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    endIcon={<ArrowRight />}
                                >
                                    Case Study
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box
                                component="img"
                                src="/images/Homebackground3.png"
                                className={classes.foregroundImage}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
