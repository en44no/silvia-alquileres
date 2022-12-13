import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import { FaChevronLeft, FaChevronRight, FaDotCircle, FaRegDotCircle } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import piriapolisImage from '../public/images/piriapolis.jpg'
import playaGrandeImage from '../public/images/playa-grande.jpeg'
import puntaNegraImage from '../public/images/punta-negra.jpeg'

const MyCarousel = () => {

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    cursor: 'pointer',
    backgroundColor: '#f0f6ff'
  };

  return (
    <Carousel w='75%' showStatus={false} showThumbs={false} interval={3000} infiniteLoop={true} autoPlay={true} renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <Button borderRadius='50%' type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
          <FaChevronLeft fontSize='1.2rem' />
        </Button>
      )
    }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <Button borderRadius='50%' type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
            <FaChevronRight fontSize='1.2rem' />
          </Button>
        )
      } renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "#f0f6ff", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, color: "#f0f6ff" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {isSelected ? <FaDotCircle /> : <FaRegDotCircle />}

          </span>
        );
      }}>
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