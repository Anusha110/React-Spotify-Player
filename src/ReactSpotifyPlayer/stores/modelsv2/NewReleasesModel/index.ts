import { NewReleaseItemType, GetNewReleasesResponseType } from '../../typesv2'
import NewReleasesItemModel from '../NewReleaseItemModel'

class NewReleasesModel {
   albums: { items: NewReleaseItemType[] }

   constructor(newReleasesResponse: GetNewReleasesResponseType) {
      const { albums } = newReleasesResponse

      this.albums = {
         items: albums.items.map(eachItem => new NewReleasesItemModel(eachItem))
      }
   }
}

export default NewReleasesModel
