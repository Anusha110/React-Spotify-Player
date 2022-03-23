import { ArtistType } from '../../typesv2'

class ArtistModel {
   name: string

   constructor(artistInfo: ArtistType) {
      const { name } = artistInfo

      this.name = name
   }
}

export default ArtistModel
