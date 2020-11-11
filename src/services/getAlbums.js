import { ENDPOINT, USER_ID } from './settings'

import getPhotos from './getPhotos'

export default function getAlbums () {
  const apiURL = `${ENDPOINT}/albums?userId=${USER_ID}`
  return window.fetch(apiURL)
    .then(res => res.json())
    .then(albums => {
      return Promise.all(albums.map(async ({ id, title }) => {
        const photos = await getPhotos({ id })
        return {
          id,
          title,
          photos: photos.slice(0, 8)
        }
      }))
    })
}
