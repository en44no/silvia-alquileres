import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Flex, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import MyCarousel from "../../components/MyCarousel";
import { BsWhatsapp } from "react-icons/bs";
import GoogleMap from '../GoogleMap';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon
} from "react-share";
import { FaShare } from 'react-icons/fa';
import Head from 'next/head';

const PropertyDetails = (props) => {

  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const {
    price,
    name,
    simpleLocation,
    description,
    featuresLeftSide,
    featuresRightSide,
    observations,
    googleMapsSrc,
    imagesSrc,
    videosLinks,
    gastosIncluidos = false
  } = props;

  return (
    <>
      <Head>
        <title>{name} - Silvia Alquileres</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${name} - Silvia Alquileres`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagesSrc[0]} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${name} - Silvia Alquileres`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagesSrc[0]} />
      </Head>

      <Box display='flex' flexDirection={{ sm: 'column', md: 'column', lg: 'column', xl: 'row' }} ml={{ sm: '0', md: '0', lg: '0', xl: '-6rem' }} gap={{ sm: '0', md: '0', lg: '0', xl: '4rem' }}>
        <MyCarousel imagesSrc={imagesSrc} videosLinks={videosLinks} />

        <Box bg='#fff' border={{ sm: 'none', md: 'none', lg: 'none', xl: '2px solid #ebeff5' }} h='fit-content' borderRadius='20px'>

          <Box className='noSelect' display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block"
          }}>
            <GoogleMap src={googleMapsSrc} />
          </Box>

          <Box className='noSelect' display='flex' bg='#fff' flexDirection='column' gap={{ sm: '0rem', md: '0rem', lg: '0rem', xl: '0.5rem' }} alignItems='center' mt={{ sm: '0.5rem', md: '0.5rem', lg: '0.5rem', xl: '1rem' }} mb='0.5rem'>

            <Text fontSize='2xl' fontWeight='bold'>${price} UYU</Text>
            {gastosIncluidos && (
              <Text fontSize='sm' fontWeight='semibold' color='#808080'>*Gastos incluídos.</Text>
            )}
            {/* <Text fontSize='sm' fontWeight='semibold' pb='0.5rem' color='#808080'>*Consultar por descuentos al reservar varios días.</Text> */}

            <Box
              p={{ sm: '0.5rem 0 1rem 0', lg: '0 1rem 1rem 1rem' }}
              m='0'
              w='100%'
              justify='space-between'
              flexWrap='wrap'
              display='flex'
              gap='0.5rem'
            >

              <Button
                onClick={() => window.open(`https://api.whatsapp.com/send/?phone=59895579099&text=%C2%A1Hola!+Estoy+interesado+en+alquilar+tu+propiedad+de+${simpleLocation}. ¿Podrías+decirme+en+qué+fecha+está+disponible?+Muchas gracias.`, '_blank')}
                bg='#394e6a'
                color='#fff'
                _hover={{ bgColor: '#668dbf' }}
                _active={{ bgColor: '#394e6a' }}
                w='100%'
                variant='ghost'
                borderRadius='18px'
                leftIcon={<BsWhatsapp />}
              >
                Consultar
              </Button>

              <Menu placement='bottom-end'>
                <MenuButton
                  as={Button}
                  bg='#f0f6ff'
                  color='#394e6a'
                  _hover={{ bgColor: '#dce1e9' }}
                  _active={{ bgColor: '#f0f6ff' }}
                  w='100%'
                  variant='ghost'
                  borderRadius='18px'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <Box as={FaShare} mr={2} />
                    Compartir
                  </Box>
                </MenuButton>
                <MenuList minW='0' bg='white' boxShadow='lg' p={2} display='flex' flexDirection='row' justifyContent='end' gap={2} placement="bottom-end">
                  <MenuItem as='div' bg='white' p={0} w='auto'>
                    <FacebookShareButton
                      url={currentUrl}
                      title={`¡Mira esta propiedad en Silvia Alquileres!`}
                      hashtag="#SilviaAlquileres"
                    >
                      <Box
                        as={FacebookIcon}
                        size={32}
                        round
                        sx={{
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    </FacebookShareButton>
                  </MenuItem>
                  <MenuItem as='div' bg='white' p={0} w='auto'>
                    <TwitterShareButton
                      url={currentUrl}
                      title={`¡Mira esta propiedad en Silvia Alquileres!`}
                      hashtags={['SilviaAlquileres']}
                    >
                      <Box
                        as={TwitterIcon}
                        size={32}
                        round
                        sx={{
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    </TwitterShareButton>
                  </MenuItem>
                  <MenuItem as='div' bg='white' p={0} w='auto'>
                    <TelegramShareButton
                      url={currentUrl}
                      title={`¡Mira esta propiedad en Silvia Alquileres!`}
                    >
                      <Box
                        as={TelegramIcon}
                        size={32}
                        round
                        sx={{
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    </TelegramShareButton>
                  </MenuItem>
                  <MenuItem as='div' bg='white' p={0} w='auto'>
                    <WhatsappShareButton
                      url={currentUrl}
                      title={`¡Mira esta propiedad en Silvia Alquileres!`}
                      separator=" - "
                    >
                      <Box
                        as={WhatsappIcon}
                        size={32}
                        round
                        sx={{
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    </WhatsappShareButton>
                  </MenuItem>

                </MenuList>
              </Menu>
            </Box>

          </Box>
        </Box>

        <Box w='100%' display={{
          sm: "contents",
          md: "contents",
          lg: "contents",
          xl: "none"
        }}>
          <GoogleMap src={googleMapsSrc} width='100%' />
        </Box>
      </Box >

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign={{ sm: 'left', md: 'center' }} minW='fit-content' fontSize='xl' fontWeight='bold'>Descripción</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Text textAlign={{ sm: 'left', md: 'center' }} fontWeight='semibold'>
        {description}
      </Text>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Características</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box display='flex' flexDirection={{ sm: 'column', md: 'row' }} w={{ sm: '100%', md: '100%' }} gap={{ sm: '0', md: '0', lg: '5rem' }} alignItems={{ sm: 'left', md: 'normal' }} justifyContent={{ sm: 'space-between', md: 'space-between', lg: 'center' }} mb='0.5rem'>

        <Box w={{ sm: '100%', md: '100%', lg: 'fit-content' }}>
          {featuresLeftSide && featuresLeftSide.map((feature, index) => (
            <Box key={index} display='flex' alignItems={{ sm: 'left', md: 'center' }} w='fit-content' gap='0.5rem'>
              <Text fontWeight='semibold' fontSize='1rem'>• {feature}</Text>
            </Box>
          ))}
        </Box>

        <Box w={{ sm: '100%', md: '100%', lg: 'fit-content' }}>
          {featuresRightSide && featuresRightSide.map((feature, index) => (
            <Box key={index} display='flex' alignItems={{ sm: 'left', md: 'center' }} w='fit-content' gap='0.5rem'>
              <Text fontWeight='semibold' fontSize='1rem'>• {feature}</Text>
            </Box>
          ))}
        </Box>

      </Box>

      <Box w='100%' pb='2rem'>
        <Flex align="center" w='100%'>
          <Divider bg='#dee5f0' h='0.07rem' />
          <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Observaciones</Text>
          <Divider bg='#dee5f0' h='0.07rem' />
        </Flex>

        <Box display='flex' flexDirection='column' alignItems={{ sm: 'left', md: 'center' }}>

          {observations && observations.map((observation, index) => (
            <Box key={index} display='flex' w='fit-content' gap='0.5rem'>
              <Text textAlign='left' fontWeight='semibold' fontSize='1rem'>{observation}</Text>
            </Box>
          ))}

        </Box>

      </Box>
    </>
  )
}

export default PropertyDetails;