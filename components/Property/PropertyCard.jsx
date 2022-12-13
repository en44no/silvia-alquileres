import React from 'react'
import { Box, Text, Card, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaToilet, FaBed, FaSearch } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

const PropertyCard = (props) => {

  const router = useRouter()
  const { name, src, address, toiletQuantity, bedQuantity, route } = props;

  return (
    <Card p='0' maxW='md' bg='white' color='#394e6a' borderRadius='20px'>
      <Box className='image-container'>
        <Image style={{ 'width': '100%', 'height': '15rem', 'borderStartStartRadius': '18px', 'borderStartEndRadius': '18px', 'objectFit': 'cover' }}
          src={src}
        />
      </Box>
      <CardBody py='1'>
        <Text textAlign='center' fontSize='xl' fontWeight='semibold'>
          {name}
        </Text>
        <Box display='flex' justifyContent='center' alignItems='center' gap='0.5rem' my='0.5rem'>
          <Text w='fit-content'><MdLocationOn style={{ 'width': 'fit-content', 'fontSize': '1.2rem' }} /></Text>
          <Text textAlign='center' fontWeight='medium'>{address}</Text>
        </Box>
        <Box display='flex' gap='1rem' justifyContent='center' mt='1rem' mb='0.5rem'>
          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontSize='1.2rem'><FaToilet /></Text>
            <Text fontWeight='bold' fontSize='1rem' mt='-1rem' ml='-0.5rem'>{toiletQuantity}</Text>
          </Box>
          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontSize='1.4rem'><FaBed /></Text>
            <Text fontWeight='bold' fontSize='1rem' mt='-1rem' ml='-0.5rem'>{bedQuantity}</Text>
          </Box>
        </Box>
      </CardBody>

      <CardFooter
        p='0'
        m='0'
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=59895579099&text=%C2%A1Hola!+Estoy+interesado+en+alquilar+tu+propiedad+de+${name}. ¿Podrías+decirme+en+qué+fecha+está+disponible?+Muchas gracias.`, '_ blank')} bg='#394e6a' color='#fff' _hover={{ 'bgColor': '#668dbf' }} w='50%' flex='1' variant='ghost' borderStartStartRadius='0' borderStartEndRadius='0' borderEndStartRadius='18px' borderEndEndRadius='0' leftIcon={<BsWhatsapp />}>
          Consultar
        </Button>
        <Button onClick={() => router.push(`/property/${route}`)} bg='#e8eef7' color='#394e6a' _hover={{ 'bgColor': '#dce1e9' }} w='50%' flex='1' variant='ghost' borderStartStartRadius='0' borderStartEndRadius='0' borderEndStartRadius='0' borderEndEndRadius='18px' leftIcon={<FaSearch />}>
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  )
}
export default PropertyCard