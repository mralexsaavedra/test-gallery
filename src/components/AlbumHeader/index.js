import React from 'react'

import { DetailsButton, Header, PressableTitle, Text, Title } from './styles'

export const AlbumHeader = ({ title, id, onClick }) => {
  return (
    <Header>
      <PressableTitle onPress={onClick}>
        <Title>📕 {title}</Title>
      </PressableTitle>

      <DetailsButton
        onPress={onClick}
      >
        <Text>👀 Details</Text>
      </DetailsButton>
    </Header>
  )
}
