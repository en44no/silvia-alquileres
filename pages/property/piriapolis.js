import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import MyCarousel from "../../components/MyCarousel";
import PageLayout from "../../components/PageLayout/PageLayout";
import { FaToilet, FaBed, FaWarehouse, FaUserAlt } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

export default function Property() {
  return (
    <PageLayout title='Piriápolis'>

      <Box display='flex' ml='-6rem' mt='2rem'>
        <MyCarousel />

        <Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.21279044420436!2d-55.26936714295279!3d-34.863706309384284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575425fefb01769%3A0x6256a2b703d3cd69!2sMisiones%201113%2C%2020200%20Piri%C3%A1polis%2C%20Departamento%20de%20Maldonado!5e0!3m2!1ses-419!2suy!4v1670907535461!5m2!1ses-419!2suy" width="400" height="300" allowfullscreen="" loading="lazy" style={{ 'borderRadius': '20px' }} referrerpolicy="no-referrer-when-downgrade"></iframe>

          <Box bg='#fff' p='1rem' borderRadius='20px' display='flex' flexDirection='column' gap='0.5rem' alignItems='center' mt='1rem' mb='0.5rem'>

            <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
              <Text fontSize='1.2rem'><FaToilet /></Text>
              <Text fontWeight='semibold' fontSize='1rem'>1 baño</Text>
            </Box>

            <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
              <Text fontSize='1.4rem'><FaBed /></Text>
              <Text fontWeight='semibold' fontSize='1rem'>1 dormitorio, 1 cama</Text>
            </Box>

            <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
              <Text fontSize='1.4rem'><FaUserAlt /></Text>
              <Text fontWeight='semibold' fontSize='1rem'>2 huéspedes</Text>
            </Box>

            <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
              <Text fontSize='1.4rem'><FaWarehouse /></Text>
              <Text fontWeight='semibold' fontSize='1rem'>Cochera</Text>
            </Box>

            <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
              <Text fontSize='1.4rem'><MdSecurity /></Text>
              <Text fontWeight='semibold' fontSize='1rem'>Rejas, cámaras</Text>
            </Box>

          </Box>
        </Box>

      </Box>


      <Flex align="center" w='100%'>
        <Divider bg='#394e6a' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Descripción</Text>
        <Divider bg='#394e6a' />
      </Flex>

      <Text textAlign='center' fontWeight='semibold'>
        Casa a estrenar. La propiedad cuenta con una excelente iluminación natural. Pisos en porcelanato, aberturas con DVH (doble vidrio hermético), grifería de primera línea. La propiedad cuenta con instalación preparada para colocar aires acondicionados split.
      </Text>
    </PageLayout >
  )
}