import React from 'react'
import { Box, Text, Card, CardBody, CardFooter, Button, Divider, Alert, AlertIcon } from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaToilet, FaBed, FaSearch, FaUser } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Image from 'next/image'
import { useRouter } from 'next/router';

const PropertyCard = (props) => {

  const router = useRouter()
  const { name, src, address, toiletQuantity, bedQuantity, peopleQuantity, route, price, unavailableText } = props;

  return (
    <Card p='0' w={{ sm: '100%', md: '90%', lg: '18rem', xl: '18rem', xxl: '22rem' }} boxShadow='none' border='2px solid #ebeff5' bg='white' color='#394e6a' borderRadius='20px'>

      <Box className='image-container' position='relative'>

        <Image alt={`Propiedad "${name}"`} className='property-image' onClick={() => router.push(`/property/${route}`)} style={{ 'width': '100%', 'height': '15rem', 'borderStartStartRadius': '18px', 'borderStartEndRadius': '18px', 'objectFit': 'cover', 'cursor': 'pointer' }}
          src={src}
        />

        {unavailableText && (
          <Alert status='warning' w='fit-content' borderRadius='18px' p='0.3rem 0.8rem' position='absolute' top='0.5rem' right='0.5rem' fontSize='0.9rem' fontWeight='600' >
            <AlertIcon />
            {unavailableText}
          </Alert>
        )}

      </Box>

      <CardBody py='1'>

        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Text fontSize='xl' fontWeight='semibold' color='#808080'>
            {name}
          </Text>


          <Text fontSize='xl' fontWeight='bold' my='0.5rem'>
            {price}
          </Text>
        </Box>

        <Divider />

        <Box display='flex' alignItems='center' gap='0.5rem' my='0.5rem'>
          <Text><MdLocationOn style={{ 'width': '1.2rem', 'fontSize': '1.2rem', 'color': '#808080' }} /></Text>
          <Text fontSize='md' fontWeight='medium' color='#808080' lineHeight='normal'>{address}</Text>
        </Box>

        <Divider />

        <Box display='flex' gap='1.5rem' my='0.5rem'>


          <Box display='flex' color='#808080' flexDirection='column' justifyContent='left' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold'>Habitaciones</Text>
            <Box display='flex' gap='0.5rem'>
              <Text fontSize='1.4rem'><FaBed style={{ 'color': '#808080' }} /></Text>
              <Text fontWeight='semibold' mt='-0.1rem'>{bedQuantity}</Text>
            </Box>
          </Box>


          <Box display='flex' color='#808080' flexDirection='column' justifyContent='left' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold'>Baños</Text>
            <Box display='flex' gap='0.5rem'>
              <Text fontSize='1.2rem'><FaToilet style={{ 'color': '#808080' }} /></Text>
              <Text fontWeight='semibold' mt='-0.1rem'>{toiletQuantity}</Text>
            </Box>
          </Box>

          <Box display='flex' color='#808080' flexDirection='column' justifyContent='left' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold'>Personas</Text>
            <Box display='flex' gap='0.5rem'>
              <Text fontSize='1.2rem'><FaUser style={{ 'color': '#808080' }} /></Text>
              <Text fontWeight='semibold' mt='-0.1rem'>{peopleQuantity}</Text>
            </Box>
          </Box>

        </Box>
      </CardBody>

      <CardFooter
        p='0 1rem 1rem 1rem'
        display='flex'
        flexDirection='column'
        m='0'
        gap='0.5rem'
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=59895579099&text=%C2%A1Hola!+Estoy+interesado+en+alquilar+tu+propiedad+en+${name}. ¿Podrías+decirme+en+qué+fecha+está+disponible?+Muchas gracias.`, '_ blank')} bg='#394e6a' color='#fff' _hover={{ 'bgColor': '#668dbf' }} w='100%' variant='ghost' borderRadius='18px' leftIcon={<BsWhatsapp />}>
          Consultar
        </Button>
        <Button onClick={() => router.push(`/property/${route}`)} bg='#f0f6ff' color='#394e6a' _hover={{ 'bgColor': '#dce1e9' }} w='100%' variant='ghost' borderRadius='18px' leftIcon={<FaSearch />}>
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  )
}
export default PropertyCard