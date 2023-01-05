import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import PageLayout from "../components/PageLayout/PageLayout";

export default function Contact() {
  return (
    <PageLayout title='Preguntas frecuentes' centerChildren={false} showGoBack={true}>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>¿Cómo puedo contactarte?</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box w='100%'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text display='flex' textAlign='left' alignItems='center' gap='0.5rem' fontWeight='semibold' fontSize='1rem'>Puedes contactarme por whatsapp, tienes la opción de hacerlo desde cualquiera de las propiedades o haciendo click en el botón de abajo.</Text>
          </Box>

          <Button mt='0.5rem' onClick={() => window.open(`https://api.whatsapp.com/send/?phone=59895579099&text=%C2%A1Hola!+Estoy+interesado+en+alquilar+una+de+tus+propiedades. +Muchas gracias.`, '_ blank')} bg='#394e6a' color='#fff' _hover={{ 'bgColor': '#668dbf' }} w={{ sm: '100%', md: '100%', lg: 'fit-content' }} variant='ghost' borderRadius='18px' leftIcon={<BsWhatsapp />}>
            Enviar mensaje
          </Button>
        </Box>
      </Box>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>¿Debo hacer una entrega para reservar una propiedad?</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box w='100%'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text display='flex' textAlign='left' alignItems='center' gap='0.5rem' fontWeight='semibold' fontSize='1rem'>Sí, para reservar se debe abonar el 30% del precio total, el resto se paga al llegar a la propiedad en cuestión.</Text>
          </Box>
        </Box>
      </Box>

    </PageLayout>
  )
}