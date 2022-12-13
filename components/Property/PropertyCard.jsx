import React from 'react'
import { Box, Text, Card, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaToilet, FaBed, FaSearch } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Image from 'next/image'
import { useRouter } from 'next/router';

const PropertyCard = (props) => {

  const router = useRouter()
  const { name, src, address, toiletQuantity, bedQuantity, route, price } = props;

  return (
    <Card p='0' maxW='md' bg='white' color='#394e6a' borderRadius='20px'>
      <Box className='image-container'>
        <Image onClick={() => router.push(`/property/${route}`)} style={{ 'width': '100%', 'height': '15rem', 'borderStartStartRadius': '18px', 'borderStartEndRadius': '18px', 'objectFit': 'cover', 'cursor': 'pointer' }}
          src={src}
        />
      </Box>
      <CardBody py='1'>
        <Text textAlign='center' fontSize='xl' fontWeight='bold'>
          {name}
        </Text>

        <Box display='flex' justifyContent='center' alignItems='center' gap='0.5rem' my='0.5rem'>
          <Text w='fit-content'><MdLocationOn style={{ 'width': 'fit-content', 'fontSize': '1.2rem' }} /></Text>
          <Text textAlign='center' fontSize='md' fontWeight='medium'>{address}</Text>
        </Box>
        <Box display='flex' gap='1rem' justifyContent='center' mt='1rem' mb='0.5rem'>
          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontSize='1.2rem'><FaToilet /></Text>
            <Text fontWeight='semibold' fontSize='0.9rem' mt='-1rem' ml='-0.4rem'>{toiletQuantity}</Text>
          </Box>
          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontSize='1.4rem'><FaBed /></Text>
            <Text fontWeight='semibold' fontSize='0.9rem' mt='-1rem' ml='-0.4rem'>{bedQuantity}</Text>
          </Box>
        </Box>

        <Text textAlign='center' fontSize='xl' fontWeight='bold' my='0.5rem'>
          {price}
        </Text>
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