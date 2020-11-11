import React from 'react'

import { Image } from './styles'

const DEFAULT_IMAGE = 'https://pbs.twimg.com/profile_images/1254016464916557824/8apCP0BP_400x400.jpg'

export const Avatar = () => {
  return (
    <Image
      source={{
        uri: DEFAULT_IMAGE
      }}
    />
  )
}
