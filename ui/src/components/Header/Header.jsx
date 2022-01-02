import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@mui/material';
import Logo from '../../../public/images/Devigital_logo1.png';
import Logo2 from '../../../public/images/Devigital_logo2.png';
import LogoName from '../../../public/images/Devigital_logo_name1.png';
import LogoName2 from '../../../public/images/Devigital_logo_name2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        '& > * a': {
            textDecoration: 'none',
        },
    },
    linksMarginBlack: {
        padding: '0 17px',
        color: '#6B7175',
        cursor: 'pointer',
        fontFamily: 'DM Sans',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '24px',
    },
    linksMarginWhite: {
        padding: '0 17px',
        color: '#FFFFFF',
        cursor: 'pointer',
        fontFamily: 'DM Sans',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '24px',
    },
    hamWhite: {
        color: '#FFFFFF',
    },
    hamBlack: {
        color: '#333333',
    },
    linksMarginhoverWhite: {
        padding: '0 17px',
        color: '#FFFF',
        cursor: 'pointer',
        fontFamily: 'DM Sans',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '24px',
    },
    hamWhiteHover: {
        color: '#FFFF',
    },
}));

const Header = ({ carousalIndex }) => {
    const classes = useStyles();
    const [index, setCarousalIndex] = useState(0);
    const [color, setColor] = useState('transparent');
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        setCarousalIndex(carousalIndex);
    }, [carousalIndex]);

    useEffect(function mount() {
        function onScroll() {
            if (window.scrollY === 0) {
                setColor('transparent');
                setIsScroll(false);
            } else {
                setIsScroll(true);
                setColor('#45108A');
            }
        }
        window.addEventListener('scroll', onScroll);
    }, []);

    const navLinkClasses = clsx({
        [classes.linksMarginhoverWhite]: index === 1 && isScroll,
        [classes.linksMarginBlack]: index === 1 && !isScroll,
        [classes.linksMarginWhite]: index === 0 || index === 2,
    });

    const position = index === 1 ? 'sticky' : 'fixed';
    return (
        <AppBar
            position={position}
            style={{ backgroundColor: `${color}` }}
            classes={{ root: classes.root }}
            elevation={0}
        >
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item style={{ cursor: 'pointer' }}>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src={
                                                index === 0 || index === 2
                                                    ? Logo2
                                                    : index === 1 && !isScroll
                                                    ? Logo
                                                    : Logo2
                                            }
                                            alt="logo"
                                            width={'24px'}
                                            height={'24px'}
                                        />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item style={{ cursor: 'pointer' }}>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src={
                                                index === 0 || index === 2
                                                    ? LogoName2
                                                    : index === 1 && !isScroll
                                                    ? LogoName
                                                    : LogoName2
                                            }
                                            alt="logo-name"
                                            width={'151px'}
                                            height={'15.98px'}
                                        />
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item component={Box} display={{ xs: 'none', md: 'block', lg: 'block' }}>
                        <Grid container alignItems="center">
                            <Grid item>
                                <Link href="/">
                                    <a>
                                        <Typography
                                            classes={{
                                                root: navLinkClasses,
                                            }}
                                        >
                                            Home
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/works">
                                    <a>
                                        <Typography
                                            classes={{
                                                root: navLinkClasses,
                                            }}
                                        >
                                            Works
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/about">
                                    <a>
                                        <Typography
                                            classes={{
                                                root: navLinkClasses,
                                            }}
                                        >
                                            About
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/contact">
                                    <a>
                                        <Typography
                                            classes={{
                                                root: navLinkClasses,
                                            }}
                                        >
                                            Contact
                                        </Typography>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
