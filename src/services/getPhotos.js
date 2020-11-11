import { ENDPOINT } from './settings'

export default function getPhotos ({ id }) {
  const apiURL = `${ENDPOINT}/photos?albumId=${id}`
  return window.fetch(apiURL)
    .then(res => res.json())
}
