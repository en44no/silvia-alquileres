import { Alert, AlertIcon, Box, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";
import PageLayout from "../components/PageLayout/PageLayout";

export default function PaymentMethods() {
  const notification = useToast();
  const toastId = "email-toast";

  const copyToClipboard = (text) => {
    if (!notification.isActive(toastId)) {
      notification({
        id: toastId,
        title: 'Copiado al portapapeles',
        status: "success",
        duration: 4000,
        position: "bottom-right",
        isClosable: true
      });
    }
    navigator.clipboard.writeText(text);
  }

  let brouPesosAccountNumber = 999999;
  let brouDollarsAccountNumber = 999999;

  return (
    <PageLayout title='Métodos de pago' centerChildren={false}>

      <Box display='flex' justifyContent='center' w='100%'>
        <Alert status='warning'>
          <AlertIcon />
          <Text fontWeight='semibold'>Antes de realizar cualquier tipo de transferencia deberás consultar la disponibilidad de la propiedad y esperar a mi confirmación.</Text>
        </Alert>
      </Box>
      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Transferencias</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box w='100%'>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text display='flex' alignItems='center' gap='0.5rem' fontWeight='semibold' fontSize='1rem'>Brou pesos - {brouPesosAccountNumber} <FaCopy style={{ 'cursor': 'pointer' }} onClick={() => copyToClipboard(brouPesosAccountNumber)} /></Text>
          </Box>

          <Box display='flex' w='fit-content' gap='0.5rem'>
            <Text display='flex' alignItems='center' gap='0.5rem' fontWeight='semibold' fontSize='1rem'>Brou dólares - {brouDollarsAccountNumber} <FaCopy style={{ 'cursor': 'pointer' }} onClick={() => copyToClipboard(brouDollarsAccountNumber)} /></Text>
          </Box>
        </Box>
      </Box>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Depósito Abitab y RedPagos</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>
    </PageLayout>
  )
}