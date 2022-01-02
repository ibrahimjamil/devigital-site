import { v4 as uuidv4 } from 'uuid';
import Slide1 from './Slide1';
import React from 'react';
import Slide4 from './Slide4';
import Carousel from '../../components/Carousel/Carousel';

export default function HomepageCarouselIndex() {
    const sliderItems = [
        <Slide1 key={uuidv4()} />,
        <Slide4 key={uuidv4()} />,
    ];
    const settings = {
        slidesToShow: 1,
        autoplay: true,
    };
    return (
        <>
            <Carousel sliderItems={sliderItems} settings={settings} />
        </>
    );
}
