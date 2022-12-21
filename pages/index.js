import { Box } from '@chakra-ui/react'
import PageLayout from '../components/PageLayout/PageLayout'
import piriapolisImage from '../public/images/piriapolis.jpg'
import playaGrandeImage from '../public/images/playa-grande.jpeg'
import puntaNegraImage from '../public/images/punta-negra.jpeg'
import PropertyCard from '../components/Property/PropertyCard'

export default function Home() {

  return (
    <PageLayout title='Propiedades'>
      <Box w='100%' display='flex' flexDirection='column' alignItems='center' mb={{ sm: '2rem', md: '2rem', lg: '2rem', xl: '0' }}>

        <Box display='flex' justifyContent='center' gap={{ sm: '1rem', md: '1rem', lg: '1rem', xl: '5rem' }} mt={{ sm: '0', md: '0', lg: '1rem', xl: '1rem', xxl: '2rem' }} flexFlow='wrap'>

          <PropertyCard name='Piriápolis' src={piriapolisImage} address='Misiones 1113 esq. Piria' toiletQuantity='5' bedQuantity='10' price='$4000 UYU' route='piriapolis' />

          <PropertyCard name='Punta Negra' src={puntaNegraImage} address='Misiones 1113 esq. Piria' toiletQuantity='5' bedQuantity='10' price='$4000 UYU' route='punta-negra' />

          <PropertyCard name='Playa Grande' src={playaGrandeImage} address='Misiones 1113 esq. Piria' toiletQuantity='5' bedQuantity='10' price='$4000 UYU' route='playa-grande' unavailableText='Enero agotado' />

        </Box>
      </Box>
    </PageLayout>
  )
}
