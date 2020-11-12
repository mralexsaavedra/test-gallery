import { useEffect, useState } from 'react'

import getAlbums from '_services/getAlbums'

export default function useAlbums () {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums()
      .then(setAlbums)
  }, [])

  return {
    albums
  }
}
