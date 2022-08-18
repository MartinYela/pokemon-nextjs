import { Container, Image, Text } from '@nextui-org/react'

import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }}>
        <Text h1>No hay favoritos</Text>
        <Image
            src='/pikachu-llora.png'
            alt='Pikachu llorando'
            width={200}
            height={200}
            css={{opacity:0.2}}
        />
    </Container>
  )
}
