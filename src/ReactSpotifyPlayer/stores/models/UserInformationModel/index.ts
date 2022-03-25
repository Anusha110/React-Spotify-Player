import {
   GetUserInformationResponseType,
   FollowersType,
   ImageType
} from '../../types'
import FollowersModel from '../FollowersModels'
import ImageModel from '../ImageModel'

class UserInformationModel {
   country: string
   displayName: string
   email: string
   spotifyExternalUrl: string
   followers: FollowersType
   href: string
   id: string
   images: ImageType[]
   product: string
   type: string
   uri: string

   constructor(userInfo: GetUserInformationResponseType) {
      const {
         country,
         display_name,
         email,
         external_urls,
         followers,
         href,
         id,
         images,
         product,
         type,
         uri
      } = userInfo

      this.country = country
      this.displayName = display_name
      this.email = email
      this.spotifyExternalUrl = external_urls.spotify
      this.followers = new FollowersModel(followers)
      this.href = href
      this.id = id
      this.images = images.map(eachImage => new ImageModel(eachImage))
      this.product = product
      this.type = type
      this.uri = uri
   }
}

export default UserInformationModel
