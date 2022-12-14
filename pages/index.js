import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../components/PageLayout/PageLayout'
import styles from '../styles/Home.module.css'
import piriapolisImage from '../public/images/piriapolis.jpg'
import playaGrandeImage from '../public/images/playa-grande.jpeg'
import puntaNegraImage from '../public/images/punta-negra.jpeg'
import PropertyCard from '../components/Property/PropertyCard'

export default function Home() {

  return (
    <PageLayout title='Propiedades'>
      <Box w='100%' display='flex' flexDirection='column' alignItems='center'>

        <Box display='flex' gap='5rem' mt='-5rem'>

          <PropertyCard name='Piriápolis' src={piriapolisImage} address='Misiones 1113 esq. Piria' toiletQuantity='5' bedQuantity='10' price='$4000 UYU' route='piriapolis' />

          <PropertyCard name='Punta Negra' src={puntaNegraImage} address='Misiones 1113 esq. Piria' toiletQuantity='5' bedQuantity='10' price='$4000 UYU' route='punta-negra' />

          <PropertyCard name='Playa Grande' src={playaGrandeImage} address='Misiones 1113 esq. Piria' toiletQuantity='5' bedQuantity='10' price='$4000 UYU' route='playa-grande' unavailableText='Enero agotado' />

        </Box>
      </Box>
    </PageLayout>
  )
}
