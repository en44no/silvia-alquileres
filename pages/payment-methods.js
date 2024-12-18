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

  let brouPesosAccountNumber = '000961308-00001';
  let brouOldAccountNumber = '023-0298913';

  return (
    <PageLayout title='Métodos de pago' centerChildren={false} showGoBack={true}>

      <Box display='flex' justifyContent='center' w='100%'>
        <Alert status='warning' borderRadius='18px'>
          <AlertIcon />
          <Text fontWeight='semibold'>Antes de realizar cualquier tipo de transferencia deberás consultar la disponibilidad de la propiedad y esperar por mi confirmación.</Text>
        </Alert>
      </Box>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Transferencias</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box w='100%' display='flex' flexDirection='column'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Text maxW={{ sm: '50%', md: '50%', lg: '100%' }} fontWeight='semibold' fontSize='1rem'>Número de cuenta (BROU) pesos</Text>
          <Text display='flex' alignItems='center' gap='0.5rem' fontWeight='semibold' fontSize='1rem'>
            {brouPesosAccountNumber} <FaCopy style={{ 'cursor': 'pointer' }} onClick={() => copyToClipboard(brouPesosAccountNumber)} />
          </Text>
        </Box>

        <Divider bg='#dee5f0' h='0.07rem' my='0.5rem' />

        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Text maxW={{ sm: '50%', md: '50%', lg: '100%' }} fontWeight='semibold' fontSize='1rem'>Número de cuenta anterior (BROU) pesos</Text>
          <Text display='flex' alignItems='center' gap='0.5rem' fontWeight='semibold' fontSize='1rem'>
            {brouOldAccountNumber} <FaCopy style={{ 'cursor': 'pointer' }} onClick={() => copyToClipboard(brouOldAccountNumber)} />
          </Text>
        </Box>
      </Box>

      <Flex align="center" w='100%'>
        <Divider bg='#dee5f0' h='0.07rem' />
        <Text padding='3' textAlign='center' minW='fit-content' fontSize='xl' fontWeight='bold'>Depósito Abitab y RedPagos</Text>
        <Divider bg='#dee5f0' h='0.07rem' />
      </Flex>

      <Box>
        <Text fontWeight='semibold' fontSize='1rem'>Se puede realizar depósito por redes de cobranza. </Text>
        <Text fontWeight='semibold' fontSize='1rem'>Tenga en cuenta que le solicitarán los números de cuenta que se detallan en la sección de arriba.</Text>
      </Box>

    </PageLayout>
  )
}