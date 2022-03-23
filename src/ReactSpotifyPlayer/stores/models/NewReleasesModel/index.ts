import SpotifyItemModel from '../../models/SpotifyItemModel'
import { GetNewReleasesResponseType, SpotifyItemType } from '../../types'

class NewReleasesModel {
   albums: SpotifyItemType[]

   constructor(newReleases: GetNewReleasesResponseType) {
      const { albums } = newReleases

      this.albums = albums.items.map(eachItem => new SpotifyItemModel(eachItem))
   }
}

export default NewReleasesModel
