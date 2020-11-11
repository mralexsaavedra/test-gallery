import React from 'react'
import { ScrollView } from 'react-native'

import { Layout } from '_components/Layout'
import { PressableImage } from '_components/PressableImage'

import { Text } from './styles'

import usePhotos from '_hooks/usePhotos'

import capitalize from '_utils/capitalize'

const AlbumComponent = ({ route, navigation }) => {
  const { id } = route.params
  const { photos } = usePhotos({ id })

  const handlePhotoClick = ({ title, url }) => {
    navigation.navigate('Photo', {
      title,
      url
    })
  }

  return (
    <Layout>
      <ScrollView>
        {
          photos.map(({ id, title, thumbnailUrl, url }) =>
            <PressableImage
              key={id}
              uri={thumbnailUrl}
              onClick={() => handlePhotoClick({ title, url })}
            >
              <Text>{capitalize(title)}</Text>
            </PressableImage>
          )
        }
      </ScrollView>
    </Layout>
  )
}

export const AlbumScreen = React.memo(AlbumComponent)
