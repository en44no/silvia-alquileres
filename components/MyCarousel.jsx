import { Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const MyCarousel = (props) => {
  const { imagesSrc, videosLinks } = props;
  const [scrollHeight, setScrollHeight] = useState(0);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${props.left ? "arrow--left" : "arrow--right"
          } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  return (
    <Box className="navigation-wrapper" border='2px solid #ebeff5' borderRadius='20px'>

      <Box onClick={() => goToTop()} style={{ height: '100%' }} ref={sliderRef} className="keen-slider" minW={{ sm: 0, md: 600, lg: 600, xl: 600 }} maxW={{ sm: '100%', md: 600, lg: 600, xl: 600 }}>

        {imagesSrc.map((src, index = 1) =>
          <Box key={src} className={`keen-slider__slide number-slide${index}`} style={{ maxWidth: '100%', minWidth: '100%' }}>
            <Image alt='Imágen de la casa' style={{ 'shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} borderRadius='20px' src={src} />
          </Box>
        )}

        {videosLinks?.map((src, index = 100) =>
          <iframe width="100" height="100" className={`keen-slider__slide number-slide${index}`} style={{ maxWidth: '100%', minWidth: '100%' }}
            src={src}>
          </iframe>
        )}


      </Box>

      {
        loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )
      }
      {loaded && instanceRef.current && (
        <Box display={{
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex"
        }} className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </Box>
      )}
    </Box>
  )
}

export default MyCarousel