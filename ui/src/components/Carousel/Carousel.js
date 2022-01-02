import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        '& .slick-slide > div': {
            padding: ({ padding }) => padding ?? 0,
        },
    },
});

export default function Carousel(props) {
    const { slidesToShow, autoplay, padding, centerMode, dots } = props.settings;
    const classes = useStyles({ padding: padding });
    const [slick, setSlick] = useState();
    const { sliderItems } = props;

    useEffect(() => {
        slick?.slickNext();
    }, [props?.next]);

    useEffect(() => {
        slick?.slickPrev();
    }, [props?.prev]);

    const settings = {
        dots: dots ?? false,
        slidesToShow: slidesToShow ?? 1,
        autoplay: autoplay ?? false,
        arrows: false,
        pauseOnHover: false,
        centerMode: centerMode ?? false,
        cssEase: 'ease-out',
        responsive: props?.settings?.responsive
            ? [...props?.settings?.responsive]
            : [
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 1,
                          centerMode: false,
                          dots: false,
                      },
                  },
              ],
    };
    return (
        <div className={classes.container}>
            <Slider ref={(c) => setSlick(c)} {...settings}>
                {sliderItems?.map((item) => (
                    <React.Fragment key={item?.key}>{item}</React.Fragment>
                ))}
            </Slider>
        </div>
    );
}
