import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import piriapolisImage from '../public/images/piriapolis.jpg'
import playaGrandeImage from '../public/images/playa-grande.jpeg'
import puntaNegraImage from '../public/images/punta-negra.jpeg'

const MyCarousel = () => {
  return (
    <Carousel w='75%' showStatus={false} showThumbs={false} interval={3000} infiniteLoop={true} autoPlay={true}>
      <Box>
        <Image style={{ 'shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} src={piriapolisImage} />
      </Box>
      <Box>
        <Image style={{ 'shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} src={playaGrandeImage} />
      </Box>
      <Box>
        <Image style={{ 'shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} src={puntaNegraImage} />
      </Box>
    </Carousel>
  )
}

export default MyCarousel