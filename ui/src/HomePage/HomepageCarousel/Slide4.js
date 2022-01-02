import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import { Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    outerMostContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    metaDataContainer: {
        position: 'absolute',
        top: '15%',
        width: '50%',
    },
    tagLine: {
        fontWeight: 'bold',
        color: '#FFFF',
        fontSize: '4vw',
        margin: '40px 0px',
    },
    subHeading: {
        color: '#FFFF',
        textTransform: 'capitalize',
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: 20,
        backgroundColor: '#FF6974',
        textTransform: 'capitalize',
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
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
        [theme.breakpoints.down('xs')]: {
            height: 400,
        },
    },
}));

export default function Slide1() {
    const classes = useStyles();

    return (
        <Box className={classes.outerMostContainer}>
            <Box className={classes.metaDataContainer}>
                <Typography variant="overline" display="block" gutterBottom className={classes.subHeading}>
                    We are Devigital
                </Typography>
                <Typography variant="h1" className={classes.tagLine}>
                    Design+build digital products & online experiences
                </Typography>
                <Button variant="contained" color="secondary" className={classes.button} endIcon={<ArrowRight />}>
                    Let&apos;s Talk
                </Button>
            </Box>
            <Box component="img" src="/images/Homebackground4.jpeg" className={classes.image} />
        </Box>
    );
}
