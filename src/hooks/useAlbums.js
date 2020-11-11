import { useEffect, useState } from 'react'

import getAlbums from '_services/getAlbums'

export default function useAlbums () {
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    setLoading(true)

    getAlbums()
      .then(setAlbums)
      .finally(setLoading(false))
  }, [])

  return {
    loading,
    albums
  }
}
