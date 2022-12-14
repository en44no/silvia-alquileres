import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import MyCarousel from "../../components/MyCarousel";
import PageLayout from "../../components/PageLayout/PageLayout";
import { BsWhatsapp } from "react-icons/bs";

export default function Property() {
  return (
    <PageLayout title='Apartamento en Piriápolis' showGoBack='true'>

      <Box display='flex' ml='-6rem'>
        <MyCarousel />

        <Box bg='#fff' h='fit-content' borderRadius='20px'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.21279044420436!2d-55.26936714295279!3d-34.863706309384284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575425fefb01769%3A0x6256a2b703d3cd69!2sMisiones%201113%2C%2020200%20Piri%C3%A1polis%2C%20Departamento%20de%20Maldonado!5e0!3m2!1ses-419!2suy!4v1670907535461!5m2!1ses-419!2suy" width="400" height="300" allowfullscreen="" loading="lazy" style={{ 'borderRadius': '20px' }} referrerpolicy="no-referrer-when-downgrade"></iframe>

          <Box display='flex' bg='#fff' flexDirection='column' gap='0.5rem' alignItems='center' mt='1rem' mb='0.5rem'>

            <Text fontSize='2xl' fontWeight='bold'>$4000 UYU</Text>
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
              <Button onClick={() => window.open(`https://api.whatsapp.com/send/?phone=59895579099&text=%C2%A1Hola!+Estoy+interesado+en+alquilar+tu+propiedad+de+Piriápolis. ¿Podrías+decirme+en+qué+fecha+está+disponible?+Muchas gracias.`, '_ blank')} bg='#394e6a' color='#fff' _hover={{ 'bgColor': '#668dbf' }} w='100%' variant='ghost' borderRadius='18px' leftIcon={<BsWhatsapp />}>
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
        Casa para dos personas ubicada en la ciudad de Piriápolis, en las calles Misiones y Piria (1113), a una cuadra del Hipercentro Devoto, a 6 de la playa y 4 de la terminal.
      </Text>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Características</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box display='flex' gap='5rem' mb='0.5rem'>

        <Box>
          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• 1 baño</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• 1 dormitorio, 1 cama</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• 2 huéspedes</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• Cochera</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• Rejas, cámaras</Text>
          </Box>
        </Box>

        <Box>
          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• Parrillero</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• TV de 32 pulgadas con cable</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• Wifi</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• Cocina, heladera, microondas</Text>
          </Box>

          <Box display='flex' alignItems='center' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>• Ventilador</Text>
          </Box>
        </Box>

      </Box>

      <Box w='100%' pb='2rem'>
        <Flex align="center" w='100%'>
          <Divider bg='#dee5f0' h='0.07rem' />
          <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Observaciones</Text>
          <Divider bg='#dee5f0' h='0.07rem' />
        </Flex>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>Luz y agua incluídos en el precio.</Text>
          </Box>

          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>Mínimo de alquiler dos días.</Text>
          </Box>

          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>Horario check in: 10:00</Text>
          </Box>

          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text fontWeight='semibold' fontSize='1rem'>Horario check out: 12:00</Text>
          </Box>
        </Box>
      </Box>

    </PageLayout >
  )
}