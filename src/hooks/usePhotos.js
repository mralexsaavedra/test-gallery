import { useEffect, useState } from 'react'

import getPhotos from '_services/getPhotos'

export default function usePhotos ({ id }) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    getPhotos({ id })
      .then(setPhotos)
  }, [])

  return {
    photos
  }
}
