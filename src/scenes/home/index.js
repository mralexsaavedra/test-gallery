import React from 'react'
import { ScrollView } from 'react-native'

import { AlbumHeader } from '_components/AlbumHeader'
import { Layout } from '_components/Layout'
import { PressableImage } from '_components/PressableImage'

import { Item, Grid, List } from './styles'

import useAlbums from '_hooks/useAlbums'

const HomeComponent = ({ navigation }) => {
  const { albums } = useAlbums()

  const handleAlbumClick = ({ title, id }) => {
    navigation.navigate('Album', {
      title,
      id
    })
  }

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
          albums.map(({ id, title, photos = [] }) =>
            <Item key={id}>
              <AlbumHeader
                title={title}
                id={id}
                onClick={() => handleAlbumClick({ title, id })}
              />
              <List horizontal>
                <Grid>
                  {
                  photos.map(({ id: idPhoto, url, title, thumbnailUrl }) =>
                    <PressableImage
                      key={idPhoto}
                      uri={thumbnailUrl}
                      onClick={() => handlePhotoClick({ title, url })}
                    />
                  )
                }
                </Grid>
              </List>
            </Item>
          )
        }
      </ScrollView>
    </Layout>
  )
}

export const HomeScreen = React.memo(HomeComponent)
