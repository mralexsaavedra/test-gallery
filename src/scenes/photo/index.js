import React from 'react'

import { Avatar } from '_components/Avatar'

import { Container, Header, Image, Title, Username } from './styles'

import capitalize from '_utils/capitalize'

export const PhotoScreen = ({ route, navigation }) => {
  const { title, url } = route.params

  return (
    <Container>
      <Header>
        <Avatar />
        <Username>mralexsaavedra</Username>
      </Header>
      <Image
        source={{
          uri: url
        }}
      />
      <Title>👉🏽 {capitalize(title)}</Title>
    </Container>
  )
}
