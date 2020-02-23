import React from 'react';
import { Zoom } from 'react-slideshow-image';

import l1 from '../assets/images/lunaHouse/l1.jpg'
import l2 from '../assets/images/lunaHouse/l2.jpg'
import l3 from '../assets/images/lunaHouse/l3.jpg'
import l4 from '../assets/images/lunaHouse/l4.jpg'
import l5 from '../assets/images/lunaHouse/l5.jpg'
import l6 from '../assets/images/lunaHouse/l6.jpg'


const images = [l1,l2,l3,l4,l5,l6];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%", height:255}} src={each} />)
        }
      </Zoom>
    )
}

export default Slideshow