import React from 'react'

import { Image, Pressable } from './styles'

export const PressableImage = ({ id, children, onClick, uri }) => {
  return (
    <Pressable onPress={onClick}>
      <Image
        source={{
          uri
        }}
      />
      {children}
    </Pressable>
  )
}
