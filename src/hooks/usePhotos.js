import { useEffect, useState } from 'react'

import getPhotos from '_services/getPhotos'

export default function usePhotos ({ id }) {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setLoading(true)

    getPhotos({ id })
      .then(setPhotos)
      .finally(setLoading(false))
  }, [])

  return {
    loading,
    photos
  }
}
