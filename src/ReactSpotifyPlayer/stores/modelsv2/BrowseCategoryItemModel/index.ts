import { BrowseCategoryItemType, ImageType } from '../../typesv2'
import ImageModel from '../../modelsv2/ImageModel'
import SpotifyItemModel from '../../modelsv2/SpotifyItemModel'

class BrowseCategoryItemModel extends SpotifyItemModel {
   images: ImageType[]

   constructor(category: BrowseCategoryItemType) {
      super(category)

      const { icons } = category
      this.images = icons.map(eachIcon => new ImageModel(eachIcon))
   }
}

export default BrowseCategoryItemModel
