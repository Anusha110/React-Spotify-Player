import { AlbumType } from '../../types'

class AlbumModel {
   name: string
   releaseDate: string

   constructor(albumInfo: AlbumType) {
      const { name, release_date } = albumInfo

      this.name = name
      this.releaseDate = release_date
   }
}

export default AlbumModel
