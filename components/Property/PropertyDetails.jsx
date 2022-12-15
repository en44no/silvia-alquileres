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
    googleMapsSrc
  } = props;

  return (
    <>
      <Box display='flex' ml='-6rem'>
        <MyCarousel />

        <Box bg='#fff' h='fit-content' borderRadius='20px'>

          <GoogleMap src={googleMapsSrc} />

          <Box display='flex' bg='#fff' flexDirection='column' gap='0.5rem' alignItems='center' mt='1rem' mb='0.5rem'>

            <Text fontSize='2xl' fontWeight='bold'>${price} UYU</Text>
            <Text fontSize='sm' fontWeight='semibold' pb='0.5rem' color='#808080'>*Consultar por descuentos al pedir varios días.</Text>

            <Box
              p='0 1rem 1rem 1rem'
              m='0'
              w='100%'
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=59895579099&text=%C2%A1Hola!+Estoy+interesado+en+alquilar+tu+propiedad+de+${simpleLocation}. ¿Podrías+decirme+en+qué+fecha+está+disponible?+Muchas gracias.`, '_ blank')} bg='#394e6a' color='#fff' _hover={{ 'bgColor': '#668dbf' }} w='100%' variant='ghost' borderRadius='18px' leftIcon={<BsWhatsapp />}>
                Consultar
              </Button>
            </Box>

          </Box>
        </Box>

      </Box>


      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Descripción</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Text textAlign='center' fontWeight='semibold'>
        {description}
      </Text>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Características</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box display='flex' gap='5rem' mb='0.5rem'>

        <Box>
          {featuresLeftSide && featuresLeftSide.map((feature) => (
            <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
              <Text fontWeight='semibold' fontSize='1rem'>• {feature}</Text>
            </Box>
          ))}
        </Box>

        <Box>
          {featuresRightSide && featuresRightSide.map((feature) => (
            <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
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

        <Box display='flex' flexDirection='column' alignItems='center'>

          {observations && observations.map((observation) => (
            <Box display='flex' w='fit-content' gap='0.5rem'>
              <Text fontWeight='semibold' fontSize='1rem'>{observation}</Text>
            </Box>
          ))}

        </Box>

      </Box>
    </>
  )
}

export default PropertyDetails