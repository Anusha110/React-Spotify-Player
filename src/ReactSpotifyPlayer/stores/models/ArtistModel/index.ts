import { ArtistType } from '../../types'

class ArtistModel {
   name: string

   constructor(artistInfo: ArtistType) {
      const { name } = artistInfo

      this.name = name
   }
}

export default ArtistModel
