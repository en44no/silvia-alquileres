import React from 'react'
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import MyCarousel from "../../components/MyCarousel";
import { BsWhatsapp } from "react-icons/bs";
import GoogleMap from '../GoogleMap';

const PropertyDetails = (props) => {

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
            <Text fontSize='sm' fontWeight='semibold' pb='0.5rem' color='#808080'>*Consultar por descuentos al pedir varios días.</Text>

            <Box
              p='0 1rem 1rem 1rem'
              m='0'
              w='100%'
              justify='space-between'
              flexWrap='wrap'
            >
              <Button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=59895579099&text=%C2%A1Hola!+Estoy+interesado+en+alquilar+tu+propiedad+de+${simpleLocation}. ¿Podrías+decirme+en+qué+fecha+está+disponible?+Muchas gracias.`, '_ blank')} bg='#394e6a' color='#fff' _hover={{ 'bgColor': '#668dbf' }} w='100%' variant='ghost' borderRadius='18px' leftIcon={<BsWhatsapp />}>
                Consultar
              </Button>
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
      </Box>



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
          {featuresLeftSide && featuresLeftSide.map((feature) => (
            <Box display='flex' alignItems={{ sm: 'left', md: 'center' }} w='fit-content' gap='0.5rem'>
              <Text fontWeight='semibold' fontSize='1rem'>• {feature}</Text>
            </Box>
          ))}
        </Box>

        <Box w={{ sm: '100%', md: '100%', lg: 'fit-content' }}>
          {featuresRightSide && featuresRightSide.map((feature) => (
            <Box display='flex' alignItems={{ sm: 'left', md: 'center' }} w='fit-content' gap='0.5rem'>
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

          {observations && observations.map((observation) => (
            <Box display='flex' w='fit-content' gap='0.5rem'>
              <Text textAlign='left' fontWeight='semibold' fontSize='1rem'>{observation}</Text>
            </Box>
          ))}

        </Box>

      </Box>
    </>
  )
}

export default PropertyDetails